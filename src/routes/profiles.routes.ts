import { Router } from 'express'
import {
  createCVProfile,
  updateCVProfile,
  deleteCVProfile
} from '../controllers/profiles.controllers'

const router = Router()

router.post('/create', createCVProfile)
router.put('/update', updateCVProfile)
router.delete('/delete', deleteCVProfile)

export default router
