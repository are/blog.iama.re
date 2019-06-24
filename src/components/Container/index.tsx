import React, { ReactNode, FunctionComponent } from 'react'
import { css } from 'emotion'

const styles = {
    root: css`
        position: relative;
        font-family: Charter;
        font-size: 21px;
        line-height: 1.4;
        font-variant-ligatures: normal;

        margin: 100px;

        width: 960px;
    `,
}

export type ContainerProps = {
    children: ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
    return <div className={styles.root}>{children}</div>
}
