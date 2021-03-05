import express, { Request, Response, NextFunction } from 'express'
import {
    currentUser,
    requireAuth,
    BadRequestError,
    validateRequest,
} from '@oregtickets/common'
import { Password } from '../services/password'
import { User } from '../models/user'
import jwt from 'jsonwebtoken'
import properties from '../../properties.config'
import { body } from 'express-validator'

const router = express.Router()

router.post('/api/users/signin', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('You must supply a password')
],
validateRequest,
async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (!existingUser) {
        throw new BadRequestError('Invalid credentials')
    }

    const passwordMatch = await Password.compare(
        existingUser.password,
        password
    )

    if (!passwordMatch) {
        throw new BadRequestError('Invalid credentials')
    }

    // Generate JWTuser

    const userJwt = jwt.sign({
        id: existingUser.id,
        email: existingUser.email,
    }, properties.JWT_KEY)

    // Store it on session object

    req.session = {
        jwt: userJwt
    }

    res.status(200).send(existingUser)
})

router.post('/api/users/signup',[
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20})
        .withMessage('Password must be between 4 and 20 characters')
],
validateRequest,
async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        throw new BadRequestError('Email in use')
    }

    const user = User.build({ email, password })
    await user.save()

    // Only uncomment this if you want the user to automatically log in once creating an account
    // Generate JWT

    // const userJwt = jwt.sign({
    //     id: user.id,
    //     email: user.email
    // }, process.env.JWT_KEY!)

    // Store it on session object

    // req.session = {
    //     jwt: userJwt
    // }
        
    res.status(201).send(user)
})

router.post('/api/users/signout', (req: Request, res: Response, next: NextFunction) => {
    req.session = null

    res.send({})
})

router.get('/api/users/currentuser', (req: Request, res: Response, next: NextFunction) => {

    res.send({ currentUser : req.currentUser || null })
})

export  { router as authController }