import { Router } from 'express'
import { getCVById } from '../controllers/cv.controllers'
const router = Router()

router.get('/get-cv/:id/', getCVById)

export default router
