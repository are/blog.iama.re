import React from 'react'
import { Router } from '@reach/router'

import { Container } from './components'

import { Home } from './views/Home'
import { Post } from './views/Post'
import { NotFound } from './views/404'

import './admonition.css'

export const App = () => {
    return (
        <Container>
            <Router>
                <Home path="/" />
                <NotFound path="/404" />
                <Post path="/:id" />
            </Router>
        </Container>
    )
}
