import { Router } from 'express'
import {
  createCVSkill,
  deleteCVSkill,
  updateCVSkill
} from '../controllers/skills.controllers'

const router = Router()

router.post('/create', createCVSkill)
router.put('/update', updateCVSkill)
router.delete('/delete', deleteCVSkill)

export default router
