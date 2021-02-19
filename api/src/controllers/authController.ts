import express from 'express'
import { Request, Response, NextFunction } from 'express'
// import { currentUser, requireAuth } from '@oregtickets/common'

const router = express.Router()

router.get('/api/auth/users/currentuser', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/auth/users/currentuser')
})

router.get('/api/auth/users/signin', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/auth/users/signin')
})

router.get('/api/auth/users/signup', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/auth/users/signup')
})

router.get('/api/auth/users/signout', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/auth/users/signout')
})

export  { router as authController }