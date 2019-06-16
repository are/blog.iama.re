import React, { ReactNode, FunctionComponent } from 'react'
import { css } from 'emotion'

const styles = {
    sidenote: css`
        position: absolute;
        top: auto;
        right: -100px;
        transform: translateX(100%);
        margin-top: 2px;
        max-width: 400px;

        text-align: justify;

        font-size: 0.8em;
    `,
}

export type SidenoteProps = {
    label?: string
    children: ReactNode
}

export const Sidenote: FunctionComponent<SidenoteProps> = ({
    children,
    label,
}) => {
    return (
        <span>
            <sup>{label}</sup>
            <span className={styles.sidenote}>
                {label} {children}
            </span>
        </span>
    )
}
