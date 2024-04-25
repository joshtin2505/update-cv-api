import { Router } from 'express'
import {
  createCVLanguage,
  deleteCVLanguage,
  updateCVLanguage
} from '../controllers/languages.controllers'

const router = Router()
router.get('/create', createCVLanguage)
router.get('/update', updateCVLanguage)
router.get('/delete', deleteCVLanguage)
export default router
