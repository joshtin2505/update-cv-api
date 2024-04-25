import type { Request, Response } from 'express'
import { pool } from '../db'

function createCVPublication(req: Request, res: Response) {
  const { name, publisher, release_date, publication_url, summary, person_id } =
    req.body
  pool
    .query(
      `INSERT INTO Publicaciones (
              name,
              publisher,
              release_date,
              publication_url,
              summary,
              person_id
          ) VALUES ($1, $2, $3, $4, $5, $6)`,
      [name, publisher, release_date, publication_url, summary, person_id]
    )
    .then(() => {
      res.status(201).send(`Publicación creada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVPublication(req: Request, res: Response) {
  const { id, name, publisher, release_date, publication_url, summary } =
    req.body
  pool
    .query(
      `UPDATE Publicaciones
          SET name = $2,
          publisher = $3,
          release_date = $4,
          publication_url = $5,
          summary = $6
          WHERE person_id = $1`,
      [id, name, publisher, release_date, publication_url, summary]
    )
    .then(() => {
      res.status(200).send(`Publicación actualizada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVPublication(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Publicaciones WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Publicación eliminada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVPublication, updateCVPublication, deleteCVPublication }
