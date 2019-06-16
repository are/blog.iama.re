export type PostModel = {
    title: string
    author: string
    content: string
    created_at: string
    slug: string
}

export const postCreatedAt = (post: PostModel): Date =>
    new Date(post.created_at)
