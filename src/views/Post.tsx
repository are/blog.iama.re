import React, { FunctionComponent, useState, useContext } from 'react'
import { RouteComponentProps, Redirect } from '@reach/router'
import distanceToNow from 'date-fns/formatDistanceToNow'
import { useAsyncEffect } from 'use-async-effect'

import { PostModel, postCreatedAt } from '../models/Post'

import { Title, Nav, Link, Spinner } from '../components'
import { Markdown } from '../components/Markdown'
import { DBContext } from '../contexts/Database'

export type PostProps = RouteComponentProps<{
    slug: string
}>

export const Post: FunctionComponent<PostProps> = ({ slug }) => {
    const { getPostBySlug } = useContext(DBContext)
    const [post, setPost] = useState<PostModel>()
    const [error, setError] = useState<string | null>(null)

    useAsyncEffect(
        async () => {
            if (!slug) {
                return setError('404')
            }

            const post = await getPostBySlug(slug)

            if (!post) {
                return setError('404')
            }

            setPost(post)
        },
        undefined,
        [slug]
    )

    if (error === '404') {
        return <Redirect to="/404" noThrow />
    }

    if (!post) {
        return <Spinner />
    }

    const createdAt = postCreatedAt(post)

    return (
        <>
            <Nav>
                <Link internal to="/">
                    Back
                </Link>
                <span title={createdAt.toLocaleString()}>
                    {distanceToNow(createdAt)} ago
                </span>
                <span>@{post.author}</span>
            </Nav>
            <Title>{post.title}</Title>
            <Markdown text={post.content} />
        </>
    )
}
