import React, {
    createContext,
    ReactNode,
    FunctionComponent,
    useCallback,
} from 'react'
import PouchDB from 'pouchdb-browser'
import PouchDBFind from 'pouchdb-find'
import prop from 'ramda/es/prop'

import { DB_URL } from '../constants'
import { PostModel } from '../models/Post'

PouchDB.plugin(PouchDBFind)

const db = new PouchDB(DB_URL, { skip_setup: true })

export type Result<T> = PouchDB.Core.ExistingDocument<
    T & PouchDB.Core.AllDocsMeta
>

export type DBContext = {
    getDatabaseInfo: () => Promise<PouchDB.Core.DatabaseInfo>
    getRecentPosts: (
        limit?: number,
        skip?: number
    ) => Promise<Result<PostModel>[]>
    getPostBySlug: (slug: string) => Promise<Result<PostModel>>
}

export const DBContext = createContext<DBContext>({} as DBContext)

export type DatabaseProviderProps = {
    children: ReactNode
}

export const DatabaseProvider: FunctionComponent<DatabaseProviderProps> = ({
    children,
}) => {
    const getDatabaseInfo = useCallback(async () => {
        return db.info()
    }, [])

    const getRecentPosts = useCallback(async (limit = 10, skip = 0) => {
        const result = await db.query<PostModel, PostModel>('posts/all', {
            descending: true,
            endkey: skip,
            limit: limit,
        })

        return result.rows.map(prop('value'))
    }, [])

    const getPostBySlug = useCallback(async (slug: string) => {
        const result = await db.find({
            selector: {
                slug,
            },
            limit: 1,
        })

        return result.docs[0] as PouchDB.Core.ExistingDocument<
            PostModel & PouchDB.Core.AllDocsMeta
        >
    }, [])

    const contextValue: DBContext = {
        getDatabaseInfo,
        getRecentPosts,
        getPostBySlug,
    }

    return (
        <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
    )
}
