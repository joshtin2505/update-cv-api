import { Router } from 'express'
import {
  createCVVolunteer,
  deleteCVVolunteer,
  updateCVVolunteer
} from '../controllers/volunteer.controllers'

const router = Router()

router.post('/create', createCVVolunteer)
router.put('/update', updateCVVolunteer)
router.delete('/delete', deleteCVVolunteer)
export default router
