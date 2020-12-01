import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import favicon from 'serve-favicon'
import fileUpload from 'express-fileupload'
import database from './bin/database.js'

database.connect


const __dirname = dirname(fileURLToPath(import.meta.url))


export default (express, app) => {
  // view engine setup
  app.use(favicon(path.join(__dirname, 'public', 'images', 'assets', 'favicon.ico')))
  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, 'public')))

  app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
  }))

  app.use((req, res, next) => {
    res.locals.appName = 'Lost Among Us Friend Finder'
    next()
  })
}