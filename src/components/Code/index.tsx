import React, { FunctionComponent, ReactNode } from 'react'
import { PrismLight } from 'react-syntax-highlighter'
import { css, cx } from 'emotion'

import ts from 'react-syntax-highlighter/dist/languages/prism/typescript'
import js from 'react-syntax-highlighter/dist/languages/prism/jsx'

import { vs } from './themes'

const styles = {
    pre: css`
        padding-left: 20px;
    `,
    code: css`
        font-family: 'Fira Code';
        font-size: 0.9em;
        font-feature-settings: 'calt' 1;
        font-variant-ligatures: contextual;
    `,
}

PrismLight.registerLanguage('ts', ts)
PrismLight.registerLanguage('js', js)

export const PreTag: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <pre className={styles.pre}>{children}</pre>
}

export const CodeTag: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <code className={cx(styles.code, vs)}>{children}</code>
}

export type CodeProps = {
    children: string
    language?: 'ts' | 'js'
}

export const Code: FunctionComponent<CodeProps> = ({ children, language = 'ts' }) => {
    return (
        <PrismLight useInlineStyles={false} language={language} PreTag={PreTag} CodeTag={CodeTag}>
            {children}
        </PrismLight>
    )
}
