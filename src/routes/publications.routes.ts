import { Router } from 'express'
import {
  createCVPublication,
  deleteCVPublication,
  updateCVPublication
} from '../controllers/publications.controllers'

const router = Router()

router.get('/create', createCVPublication)
router.get('/update', updateCVPublication)
router.get('/delete', deleteCVPublication)

export default router
