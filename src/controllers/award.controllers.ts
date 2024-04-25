import type { Request, Response } from 'express'
import { pool } from '../db'

function createCVAward(req: Request, res: Response) {
  const { title, date, awarder, summary, person_id } = req.body
  pool
    .query(
      `INSERT INTO Premios (
              title,
              date,
              awarder,
              summary,
              person_id
          ) VALUES ($1, $2, $3, $4, $5)`,
      [title, date, awarder, summary, person_id]
    )
    .then(() => {
      res.status(201).send(`Premio creado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVAward(req: Request, res: Response) {
  const { id, title, date, awarder, summary } = req.body
  pool
    .query(
      `UPDATE Premios
          SET title = $2,
          date = $3,
          awarder = $4,
          summary = $5
          WHERE person_id = $1`,
      [id, title, date, awarder, summary]
    )
    .then(() => {
      res.status(200).send(`Premio actualizado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVAward(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Premios WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Premio eliminado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVAward, updateCVAward, deleteCVAward }
