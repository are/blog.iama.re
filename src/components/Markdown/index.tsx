import React, { FunctionComponent } from 'react'
import MDX from '@mdx-js/runtime'

import { Paragraph, Sidenote, Code, Link, Image, H1, H2, H3, H4 } from '../index'

export type MarkdownProps = {
    scope?: object
    text: string
}

export const Markdown: FunctionComponent<MarkdownProps> = ({ text, scope = {} }) => {
    return (
        <MDX
            scope={scope}
            components={{
                p: Paragraph,
                aside: Sidenote,
                code: Code,
                a: Link,
                img: Image,
                h1: H1,
                h2: H2,
                h3: H3,
                h4: H4,
            }}
        >
            {text}
        </MDX>
    )
}
