import React, { FunctionComponent, ReactNode } from 'react'
import { css } from 'emotion'

const styles = {
    h1: css`
        font-size: 1.5em;
    `,
    h2: css`
        font-size: 1.2em;
    `,
    h3: css`
        font-size: 1.05em;
    `,
    h4: css`
        font-size: 0.9em;
    `,
}

type HeaderProps = {
    children: ReactNode
}

export const H1: FunctionComponent<HeaderProps> = ({ children }) => <h1 className={styles.h1}>{children}</h1>
export const H2: FunctionComponent<HeaderProps> = ({ children }) => <h2 className={styles.h2}>{children}</h2>
export const H3: FunctionComponent<HeaderProps> = ({ children }) => <h3 className={styles.h3}>{children}</h3>
export const H4: FunctionComponent<HeaderProps> = ({ children }) => <h4 className={styles.h4}>{children}</h4>
