export type PostModel = {
    title: string
    author: string
    body: string
    createdAt: string
    slug: string
}

export const postCreatedAt = (post: PostModel): Date => new Date(post.createdAt)
