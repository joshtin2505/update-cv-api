import { Router } from 'express'
import {
  createCVLocation,
  deleteCVLocation,
  updateCVLocation
} from '../controllers/location.controllers'

const router = Router()

router.post('/create', createCVLocation)
router.put('/update', updateCVLocation)
router.delete('/delete', deleteCVLocation)

export default router
