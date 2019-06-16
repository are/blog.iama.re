import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Paragraph, Link } from '../components'

export type NotFoundProps = RouteComponentProps

export const NotFound: FunctionComponent<NotFoundProps> = () => {
    return (
        <>
            <Paragraph>I couldn't find what you were looking for.</Paragraph>
            <Paragraph>
                You can go{' '}
                <Link internal to="/">
                    home
                </Link>
                .
            </Paragraph>
        </>
    )
}
