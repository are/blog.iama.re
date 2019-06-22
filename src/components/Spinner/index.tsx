import React, { FunctionComponent } from 'react'
import { css } from 'emotion'

const styles = {
    root: css`
        display: block;
        margin: 0 auto;
        position: relative;
        width: 64px;
        height: 64px;

        & > span {
            display: block;
            position: absolute;
            border: 4px solid #2e343b;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        & > span:nth-of-type(2) {
            animation-delay: -0.5s;
        }

        @keyframes lds-ripple {
            0% {
                top: 28px;
                left: 28px;
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                top: -1px;
                left: -1px;
                width: 58px;
                height: 58px;
                opacity: 0;
            }
        }
    `,
}

export const Spinner: FunctionComponent<{}> = () => {
    return (
        <span className={styles.root}>
            <span />
            <span />
        </span>
    )
}
