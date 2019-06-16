import React, { ReactNode, FunctionComponent } from 'react'
import { css } from 'emotion'

const styles = {
    newThought: css`
        font-variant: small-caps;
        font-size: 1.17em;
    `,
}

export type NewThoughtProps = {
    children: ReactNode
}

export const NewThought: FunctionComponent<NewThoughtProps> = ({
    children,
}) => {
    return <span className={styles.newThought}>{children}</span>
}
