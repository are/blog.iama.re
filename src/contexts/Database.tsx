import React, { createContext, ReactNode, FunctionComponent, useCallback } from 'react'
import PouchDB from 'pouchdb-browser'
import PouchDBFind from 'pouchdb-find'
import { prop } from 'ramda'

import { DB_URL } from '../constants'
import { PostModel } from '../models/Post'

PouchDB.plugin(PouchDBFind)

const db = new PouchDB(DB_URL, { skip_setup: true })

export type Result<T> = PouchDB.Core.ExistingDocument<T & PouchDB.Core.AllDocsMeta>

export type DBContext = {
    getDatabaseInfo: () => Promise<PouchDB.Core.DatabaseInfo>
    getRecentPosts: (limit?: number, skip?: number) => Promise<Result<PostModel>[]>
    getPostById: (id: string) => Promise<Result<PostModel>>
    getAttachment: (id: string, filename: string) => Promise<Blob | Buffer>
}

export const DBContext = createContext<DBContext>({} as DBContext)

export type DatabaseProviderProps = {
    children: ReactNode
}

export const DatabaseProvider: FunctionComponent<DatabaseProviderProps> = ({ children }) => {
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

    const getPostById = useCallback(async (id: string) => {
        return db.get<PostModel>(id, { attachments: true })
    }, [])

    const getAttachment = useCallback(async (id: string, filename: string) => {
        return db.getAttachment(id, filename)
    }, [])

    const contextValue: DBContext = {
        getDatabaseInfo,
        getRecentPosts,
        getPostById,
        getAttachment,
    }

    return <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
}
