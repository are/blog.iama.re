export type PostModel = {
    title: string
    author: string
    body: string
    createdAt: string
    slug: string
    bookId: string
}

export const postCreatedAt = (post: PostModel): Date => new Date(post.createdAt)
