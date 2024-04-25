import type { Request, Response } from 'express'
import { pool } from '../db'

function createCVLanguage(req: Request, res: Response) {
  const { language, fluency, person_id } = req.body
  pool
    .query(
      `INSERT INTO Idiomas (
              language,
              fluency,
              person_id
          ) VALUES ($1, $2, $3)`,
      [language, fluency, person_id]
    )
    .then(() => {
      res.status(201).send(`Idioma creado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVLanguage(req: Request, res: Response) {
  const { id, language, fluency } = req.body
  pool
    .query(
      `UPDATE Idiomas
          SET language = $2,
          fluency = $3
          WHERE person_id = $1`,
      [id, language, fluency]
    )
    .then(() => {
      res.status(200).send(`Idioma actualizado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVLanguage(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Idiomas WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Idioma eliminado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVLanguage, updateCVLanguage, deleteCVLanguage }
