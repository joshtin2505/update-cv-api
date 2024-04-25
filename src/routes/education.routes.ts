import { Router } from 'express'
import {
  createCVEducation,
  deleteCVEducation,
  updateCVEducation
} from '../controllers/education.controllers'

const router = Router()

router.get('/create', createCVEducation)
router.get('/update', updateCVEducation)
router.get('/delete', deleteCVEducation)

export default router
