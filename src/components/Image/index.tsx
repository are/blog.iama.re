import React, { FunctionComponent, useContext, useState } from 'react'
import { css, cx } from 'emotion'
import { DBContext } from '../../contexts/Database'
import { useAsyncEffect } from 'use-async-effect'
import { Spinner } from '../Spinner'

const styles = {
    image: css`
        width: 100%;
    `,
}

export type ImageProps = {
    alt: string
    src: string
    style?: string
}

export const Image: FunctionComponent<ImageProps> = ({ src: initialSrc, alt, style = '' }) => {
    const urlObj = new URL(initialSrc)

    const { getAttachment } = useContext(DBContext)
    const [src, setSrc] = useState<string>(initialSrc)
    const [isLoading, setLoading] = useState<boolean>(urlObj.protocol === 'inkdrop:')

    useAsyncEffect(
        async () => {
            if (urlObj.protocol === 'inkdrop:') {
                setLoading(true)
                const blob = await getAttachment(urlObj.pathname.split('//')[1], 'index')
                const imgUrl = URL.createObjectURL(blob)

                setSrc(imgUrl)
                setLoading(false)
            }
        },
        undefined,
        []
    )

    if (isLoading) {
        return (
            <>
                <Spinner />
            </>
        )
    }

    return (
        <img
            className={cx(
                styles.image,
                css`
                    ${style}
                `
            )}
            src={src}
            alt={alt}
        />
    )
}
