import { Router } from 'express'
import {
  createCVExperience,
  deleteCVExperience,
  updateCVExperience
} from '../controllers/experience.controller'

const router = Router()

router.get('/create', createCVExperience)
router.get('/update', updateCVExperience)
router.get('/delete', deleteCVExperience)
export default router
