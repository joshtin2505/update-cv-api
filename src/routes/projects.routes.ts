import { Router } from 'express'
import {
  createCVProject,
  deleteCVProject,
  updateCVProject
} from '../controllers/projects.controllers'

const router = Router()

router.get('/create', createCVProject)
router.get('/update', updateCVProject)
router.get('/delete', deleteCVProject)

export default router
