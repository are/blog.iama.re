import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'emotion'

import { DatabaseProvider } from './contexts/Database'
import { App } from './App'

import 'normalize.css'
import './fonts/Charter'
import './fonts/FiraCode'

injectGlobal`
    html,
    body {
        background: #fffff3;
        color: #2e343b;
    }
`

render(
    <DatabaseProvider>
        <App />
    </DatabaseProvider>,
    document.getElementById('root')
)
