import { Router } from 'express'
import {
  createCVTables,
  deleteCVTables
} from '../controllers/create.db.controllers'
const router = Router()

router.get('/create-tables', createCVTables)
router.get('/delete-tables', deleteCVTables)

export default router
