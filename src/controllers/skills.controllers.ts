import type { Request, Response } from 'express'
import { pool } from '../db'

function createCVSkill(req: Request, res: Response) {
  const { name, level, keywords, person_id } = req.body
  pool
    .query(
      `INSERT INTO Habilidades (
              name,
              level,
              keywords,
              person_id
          ) VALUES ($1, $2, $3, $4)`,
      [name, level, keywords, person_id]
    )
    .then(() => {
      res.status(201).send(`Habilidad creada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVSkill(req: Request, res: Response) {
  const { id, name, level, keywords } = req.body
  pool
    .query(
      `UPDATE Habilidades
          SET name = $2,
          level = $3,
          keywords = $4
          WHERE person_id = $1`,
      [id, name, level, keywords]
    )
    .then(() => {
      res.status(200).send(`Habilidad actualizada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVSkill(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Habilidades WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Habilidad eliminada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVSkill, updateCVSkill, deleteCVSkill }
