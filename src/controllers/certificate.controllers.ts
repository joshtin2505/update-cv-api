import type { Request, Response } from 'express'
import { pool } from '../db'

function createCVCertificate(req: Request, res: Response) {
  const { name, date, issuer, certificate_url, person_id } = req.body
  pool
    .query(
      `INSERT INTO Certificados (
              name,
              date,
              issuer,
              certificate_url,
              person_id
          ) VALUES ($1, $2, $3, $4, $5)`,
      [name, date, issuer, certificate_url, person_id]
    )
    .then(() => {
      res.status(201).send(`Certificado creado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVCertificate(req: Request, res: Response) {
  const { id, name, date, issuer, certificate_url } = req.body
  pool
    .query(
      `UPDATE Certificados
          SET name = $2,
          date = $3,
          issuer = $4,
          certificate_url = $5
          WHERE person_id = $1`,
      [id, name, date, issuer, certificate_url]
    )
    .then(() => {
      res.status(200).send(`Certificado actualizado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVCertificate(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Certificados WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Certificado eliminado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVCertificate, updateCVCertificate, deleteCVCertificate }
