import React, { FunctionComponent, ReactNode } from 'react'
import { PrismLight } from 'react-syntax-highlighter'
import { css, cx } from 'emotion'

import ts from 'react-syntax-highlighter/dist/languages/prism/typescript'
import js from 'react-syntax-highlighter/dist/languages/prism/jsx'
import yaml from 'react-syntax-highlighter/dist/languages/prism/yaml'
import twig from 'react-syntax-highlighter/dist/languages/prism/twig'

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
PrismLight.registerLanguage('yml', yaml)
PrismLight.registerLanguage('twig', twig)

export const PreTag: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <pre className={styles.pre}>{children}</pre>
}

export const CodeTag: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <code className={cx(styles.code, vs)}>{children}</code>
}

export type CodeProps = {
    children: string
    className?: string
}

export const Code: FunctionComponent<CodeProps> = ({ children, className }) => {
    const [, lang] = (className || 'language-plaintext').split('-')

    return (
        <PrismLight useInlineStyles={false} language={lang} PreTag={PreTag} CodeTag={CodeTag}>
            {children}
        </PrismLight>
    )
}
