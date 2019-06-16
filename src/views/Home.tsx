import React, { FunctionComponent, useContext, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useAsyncEffect } from 'use-async-effect'

import { DBContext, Result } from '../contexts/Database'
import { PostModel } from '../models/Post'
import { Spinner, Paragraph } from '../components'

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
            <ul>
                {posts.map(post => (
                    <li key={post._id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
}
