import express from 'express'
import { Request, Response, NextFunction } from 'express'
// import { currentUser, requireAuth } from '@oregtickets/common'

const router = express.Router()

router.get('/api/anime', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/videos')
})

router.get('/api/anime/id', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/videos')
})

router.get('/api/anime/id/episodes', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/video/id')
})

router.get('/api/anime/id/episode/id', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/video/id')
})

router.delete('/api/anime/id/episode/id', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/video/id')
})

router.delete('/api/anime/id', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/video/id')
})

router.post('/api/anime/id/episode/', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/video/id')
})

router.post('/api/anime/id/episode/id', (req: Request, res: Response, next: NextFunction) => {
    res.send('/api/video/id')
})

export  { router as videoController }