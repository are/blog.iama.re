import React, { FunctionComponent, useState, useContext } from 'react'
import { RouteComponentProps, Redirect } from '@reach/router'
import distanceToNow from 'date-fns/formatDistanceToNow'
import { useAsyncEffect } from 'use-async-effect'

import { PostModel, postCreatedAt, postUpdatedAt } from '../models/Post'

import { Title, Nav, Link, Spinner } from '../components'
import { Markdown } from '../components/Markdown'
import { DBContext } from '../contexts/Database'

export type PostProps = RouteComponentProps<{
    id: string
}>

export const Post: FunctionComponent<PostProps> = ({ id }) => {
    const { getPostById } = useContext(DBContext)
    const [post, setPost] = useState<PostModel>()
    const [error, setError] = useState<string | null>(null)

    useAsyncEffect(
        async () => {
            if (!id) {
                return setError('404')
            }

            try {
                const post = await getPostById(id)

                if (!post) {
                    return setError('404')
                }

                setPost(post)
            } catch (e) {
                if (e.error === 'not_found') {
                    return setError('404')
                }

                return setError('404')
            }
        },
        undefined,
        [id]
    )

    if (error === '404') {
        return <Redirect to="/404" noThrow />
    }

    if (!post) {
        return <Spinner />
    }

    const createdAt = postCreatedAt(post)
    const updatedAt = postUpdatedAt(post)

    return (
        <>
            <Nav>
                {post.bookId === 'book:qzMBCWsMV' && (
                    <Link internal to="/">
                        Back
                    </Link>
                )}
                <span title={createdAt.toLocaleString()}>
                    {distanceToNow(createdAt)} ago
                    {updatedAt > createdAt && <em> (updated {distanceToNow(updatedAt)} ago)</em>}
                </span>
            </Nav>
            <Title>{post.title}</Title>
            <Markdown text={post.body} />
        </>
    )
}
