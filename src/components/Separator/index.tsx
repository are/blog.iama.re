import React from 'react'
import { css } from 'emotion'

const styles = {
    separator: css`
        border: 0;
        height: 1px;
        background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
        background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
        background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
        background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    `,
}

export const Separator = () => {
    return <hr className={styles.separator} />
}
