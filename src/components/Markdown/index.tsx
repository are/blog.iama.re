import React, { FunctionComponent } from 'react'
import MDX from '@mdx-js/runtime'
import remarkCustomBlocks from 'remark-custom-blocks'

import { Paragraph, Sidenote, Code, Link, Image, H1, H2, H3, H4 } from '../index'

const admonitionConfig: Record<string, { classes: string; title: string; details?: boolean }> = {}
const admonitionTypes = ['abstract', 'note', 'danger', 'warning', 'info', 'success', 'fail', 'question', 'example']

admonitionTypes.forEach(type => {
    admonitionConfig[type] = {
        classes: `admonition-${type}`,
        title: 'optional',
    }
    admonitionConfig[`${type}-spoiler`] = {
        classes: `admonition-${type}`,
        title: 'required',
        details: true,
    }
})

admonitionConfig['spoiler'] = {
    classes: 'admonition-spoiler',
    title: 'required',
    details: true,
}

export type MarkdownProps = {
    scope?: object
    text: string
}

export const Markdown: FunctionComponent<MarkdownProps> = ({ text, scope = {} }) => {
    return (
        <MDX
            remarkPlugins={[[remarkCustomBlocks, admonitionConfig]]}
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
