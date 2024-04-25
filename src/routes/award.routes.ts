import { Router } from 'express'
import {
  createCVAward,
  deleteCVAward,
  updateCVAward
} from '../controllers/award.controllers'

const router = Router()

router.get('/create', createCVAward)
router.get('/update', updateCVAward)
router.get('/delete', deleteCVAward)

export default router
