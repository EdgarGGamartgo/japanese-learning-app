import express from 'express'
import 'express-async-errors'
import * as dotenv from 'dotenv';
import { json } from 'body-parser'
import { errorHandler, NotFoundError, currentUser } from '@oregtickets/common'
import cookieSession from 'cookie-session'
import { authController } from './controllers/authController'
import { videoController } from './controllers/videoController'

const app = express()
app.set('trust proxy', true)
app.use(json())
app.use(cookieSession({
  signed: false,
// This allows request comming only from https connections.
  // secure: process.env.NODE_ENV !== 'test'  
// Plain http requests will not work.
}))
dotenv.config();
app.use(currentUser);

app.use(videoController)
app.use(authController)

app.all('*', async(req, res) => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app }