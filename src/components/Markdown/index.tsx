import React, { FunctionComponent } from 'react'
import MDX from '@mdx-js/runtime'

import { Paragraph, Sidenote, Code, Link } from '../index'

export type MarkdownProps = {
    scope?: object
    text: string
}

export const Markdown: FunctionComponent<MarkdownProps> = ({
    text,
    scope = {},
}) => {
    return (
        <MDX
            scope={scope}
            components={{
                p: Paragraph,
                aside: Sidenote,
                code: Code,
                link: Link,
            }}
        >
            {text}
        </MDX>
    )
}
