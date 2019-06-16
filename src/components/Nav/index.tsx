import React, { ReactNode, FunctionComponent } from 'react'
import { css } from 'emotion'

const styles = {
    root: css`
        display: flex;
        justify-content: space-between;

        color: #545e6b;

        font-size: 0.75em;
    `,
}

export type NavProps = {
    children: ReactNode
}

export const Nav: FunctionComponent<NavProps> = ({ children }) => {
    return <nav className={styles.root}>{children}</nav>
}
