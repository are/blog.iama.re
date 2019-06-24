import * as path from 'path'
import * as fs from 'fs'

import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ServerLocation, isRedirect } from '@reach/router'
import { renderToString } from 'react-dom/server'

import { App } from '../src/App'

export default function universalLoader(req: any, res: any) {
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html')

    fs.readFile(filePath, 'utf8', (err: any, htmlData: any) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.error('read err', err)
            return res.status(404).end()
        }

        const context: any = {}

        const requiredData: Array<any> = []

        Promise.all(requiredData).then(() => {
            let markup
            try {
                markup = renderToString(
                    <ServerLocation url={req.url}>
                        <App />
                    </ServerLocation>
                )
            } catch (e) {
                if (isRedirect(e)) {
                    return res.redirect(e.uri)
                }
            }
            const helmet = Helmet.renderStatic()

            if (context.url) {
                res.redirect(301, context.url)
            } else {
                const RenderedApp = htmlData.replace('{{ SSR }}', markup).replace('$meta$', helmet.meta.toString())

                res.status(context.statusCode || 200).send(RenderedApp)
            }
        })
    })
}
