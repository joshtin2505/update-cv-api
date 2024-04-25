import { Router } from 'express'
import {
  createCVCertificate,
  deleteCVCertificate,
  updateCVCertificate
} from '../controllers/certificate.controllers'

const router = Router()

router.get('/create', createCVCertificate)
router.get('/update', updateCVCertificate)
router.get('/delete', deleteCVCertificate)

export default router
