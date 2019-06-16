import React, { ReactNode, FunctionComponent } from 'react'
import { css } from 'emotion'

const styles = {
    title: css`
        font-size: 1.5em;
    `,
}

export type TitleProps = {
    children: ReactNode
}

export const Title: FunctionComponent<TitleProps> = ({ children }) => {
    return <h1 className={styles.title}>{children}</h1>
}
