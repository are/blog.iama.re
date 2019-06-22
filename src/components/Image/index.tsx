import React, { FunctionComponent, ReactNode, useContext, useState } from 'react'
import { css } from 'emotion'
import { DBContext } from '../../contexts/Database'
import { useAsyncEffect } from 'use-async-effect'
import { Spinner } from '../Spinner'

const styles = {
    image: css`
        width: 100%;
    `,
}

export type ImageProps = {
    children: ReactNode
    alt: string
    src: string
}

export const Image: FunctionComponent<ImageProps> = ({ children, src: initialSrc, alt }) => {
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

    return <img className={styles.image} src={src} alt={alt} />
}
