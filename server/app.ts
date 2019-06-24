require('ignore-styles')
const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')

require('@babel/register')({
    ignore: ['build', 'node_modules'],
    presets: ['@babel/preset-env', '@babel/preset-react'],
})

// routes
import universalLoader from './universal'

const app = express()

// Support Gzip
app.use(compression())

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup logger
app.use(morgan('combined'))

// Send a version of index.html that is stripped of placeholders. The service-worker requests this file directly.
app.use('/index.html', (req: any, res: any) => {
    fs.readFile(path.resolve(__dirname, '..', '..', 'build', 'index.html'), 'utf8', (err: any, htmlData: any) => {
        res.send(htmlData.replace(/DATA\s*=\s*{{.*?}}/g, '').replace(/{{.*?}}/g, ''))
    })
})

// Server JS/CSS Bundle with Cache-Control
app.use(
    '/static',
    express.static(path.resolve(__dirname, '..', '..', 'build/static'), {
        maxAge: '30d',
    })
)

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', '..', 'build'), { index: false }))

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader)

export default app
