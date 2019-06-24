import React, { FunctionComponent, ReactNode, ReactNodeArray } from 'react'
import { css, cx } from 'emotion'

import hyphen from 'hyphen'
import englishHyphenationPatterns from 'hyphen/patterns/en-us.js'
import polishHyphenationPatterns from 'hyphen/patterns/pl.js'

const styles = {
    paragraph: css`
        position: relative;
        hyphens: manual;
        text-align: justify;
    `,
    indent: css`
        text-indent: 2em;
    `,
}

export type ParagraphProps = {
    children: ReactNode
    indent?: boolean
    hyphenate?: boolean
    language?: 'en' | 'pl'
}

const englishHyphenate = hyphen(englishHyphenationPatterns)
const polishHyphenate = hyphen(polishHyphenationPatterns)

export const Paragraph: FunctionComponent<ParagraphProps> = ({
    children,
    hyphenate = false,
    language = 'en',
    indent = false,
}) => {
    let childrenArray: ReactNodeArray

    if (!Array.isArray(children)) {
        childrenArray = [children]
    } else {
        childrenArray = children
    }

    if (hyphenate) {
        childrenArray = childrenArray.map(node => {
            if (typeof node === 'string') {
                switch (language) {
                    case 'pl':
                        return polishHyphenate(node)
                    case 'en':
                    default:
                        return englishHyphenate(node)
                }
            }

            return node
        })
    }

    return <p className={cx(styles.paragraph, { [styles.indent]: indent })}>{childrenArray}</p>
}
