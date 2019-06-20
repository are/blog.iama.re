import React, { FunctionComponent, useContext, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useAsyncEffect } from 'use-async-effect'
import distanceToNow from 'date-fns/formatDistanceToNow'

import { DBContext, Result } from '../contexts/Database'
import { PostModel, postCreatedAt } from '../models/Post'
import { Spinner, Paragraph, Link, Separator } from '../components'

export type HomeProps = RouteComponentProps

export const Home: FunctionComponent<HomeProps> = () => {
    const { getRecentPosts } = useContext(DBContext)
    const [posts, setPosts] = useState<Result<PostModel>[]>([])
    const [isLoading, setLoading] = useState(true)

    useAsyncEffect(
        async () => {
            const posts = await getRecentPosts()

            setPosts(posts)
            setLoading(false)
        },
        undefined,
        []
    )

    if (isLoading) {
        return <Spinner />
    }

    if (!isLoading && posts.length === 0) {
        return <>There are no posts to display.</>
    }

    return (
        <>
            <Paragraph hyphenate language="en">
                Hi there! I'm Ar&egrave;. This is a collection of my articles and thoughts. This blog has been written
                as a serverless CouchDB-powered app. Please excuse the size of the bundle, this is mostly a playground
                for me. Code powering this blog is available on{' '}
                <Link href="https://github.com/are1000/blog.iama.re">Github</Link>.
            </Paragraph>
            <Separator />
            {posts.map(post => {
                const createdAt = postCreatedAt(post)
                return (
                    <Paragraph key={post._id}>
                        <Link internal to={`/${post._id}`}>
                            {post.title}
                        </Link>{' '}
                        <small>
                            by @{post.author} &mdash; &nbsp;
                            {distanceToNow(createdAt)} ago
                        </small>
                    </Paragraph>
                )
            })}
        </>
    )
}
