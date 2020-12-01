import createError from 'http-errors'
import express from 'express'

import indexRouter from './routes/index.js'

const app = express()

import middleware from './middleware.js'
middleware(express, app)
app.use('', indexRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => res.status(err.status || 500).json({err}))

export default app
