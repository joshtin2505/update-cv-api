import { Router } from 'express'
import {
  createCVPerson,
  deleteCVPerson,
  updateCVPerson
} from '../controllers/person.controllers'

const router = Router()

router.post('/create', createCVPerson)
router.delete('/delete', deleteCVPerson)
router.put('/update', updateCVPerson)
export default router
