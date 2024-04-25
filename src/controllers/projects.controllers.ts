import type { Request, Response } from 'express'
import { pool } from '../db'

function createCVProject(req: Request, res: Response) {
  const { name, is_active, summary, highlights, project_url, person_id } =
    req.body
  pool
    .query(
      `INSERT INTO Proyectos (
              name,
              is_active,
              summary,
              highlights,
              project_url,
              person_id
          ) VALUES ($1, $2, $3, $4, $5, $6)`,
      [name, is_active, summary, highlights, project_url, person_id]
    )
    .then(() => {
      res.status(201).send(`Proyecto creado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVProject(req: Request, res: Response) {
  const { id, name, is_active, summary, highlights, project_url } = req.body
  pool
    .query(
      `UPDATE Proyectos
          SET name = $2,
          is_active = $3,
          summary = $4,
          highlights = $5,
          project_url = $6
          WHERE person_id = $1`,
      [id, name, is_active, summary, highlights, project_url]
    )
    .then(() => {
      res.status(200).send(`Proyecto actualizado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVProject(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Proyectos WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Proyecto eliminado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVProject, updateCVProject, deleteCVProject }
