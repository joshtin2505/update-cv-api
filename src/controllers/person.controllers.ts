import { pool } from '../db'
import type { Request, Response } from 'express'

function createCVPerson(req: Request, res: Response) {
  const { name, label, image, email, phone, web_site, summary } = req.body
  pool
    .query(
      `INSERT INTO Personas (
              name,
              label,
              image,
              email,
              phone,
              web_site,
              summary
          ) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [name, label, image, email, phone, web_site, summary]
    )
    .then(() => {
      res.status(201).send(`CV creado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVPerson(req: Request, res: Response) {
  const { id, name, label, image, email, phone, web_site, summary } = req.body
  pool
    .query(
      `UPDATE Personas
          SET name = $2,
          label = $3,
          image = $4,
          email = $5,
          phone = $6,
          web_site = $7,
          summary = $8
          WHERE id = $1`,
      [id, name, label, image, email, phone, web_site, summary]
    )
    .then(() => {
      res.status(200).send(`CV actualizado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVPerson(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Personas WHERE id = $1`, [id])
    .then(() => {
      res.status(200).send(`CV eliminado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVPerson, updateCVPerson, deleteCVPerson }
