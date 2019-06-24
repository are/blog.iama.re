import React from 'react'
import { hydrate } from 'react-dom'
import { injectGlobal } from 'emotion'

import { DatabaseProvider } from './contexts/Database'
import { App } from './App'

import 'normalize.css'
import './fonts/Charter'
import './fonts/FiraCode'
import './admonition.css'

injectGlobal`
    html,
    body {
        background: #fffff3;
        color: #2e343b;
    }
`

hydrate(
    <DatabaseProvider>
        <App />
    </DatabaseProvider>,
    document.getElementById('root')
)
