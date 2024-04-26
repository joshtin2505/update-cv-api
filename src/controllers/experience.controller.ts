import type { Request, Response } from 'express'
import { pool } from '../db'

function createCVExperience(req: Request, res: Response) {
  const {
    company_name,
    position,
    company_url,
    start_date,
    end_date,
    summary,
    highlights,
    person_id
  } = req.body
  pool
    .query(
      `INSERT INTO Experiencias (
              company_name,
              position,
              company_url,
              start_date,
              end_date,
              summary,
              highlights,
              person_id
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        company_name,
        position,
        company_url,
        start_date,
        end_date,
        summary,
        highlights,
        person_id
      ]
    )
    .then(() => {
      res.status(201).send(`Experiencia creada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVExperience(req: Request, res: Response) {
  const {
    id,
    company_name,
    position,
    company_url,
    start_date,
    end_date,
    summary,
    highlights
  } = req.body
  pool
    .query(
      `UPDATE Experiencias
          SET company_name = $2,
          position = $3,
          company_url = $4,
          start_date = $5,
          end_date = $6,
          summary = $7,
          highlights = $8
          WHERE person_id = $1`,
      [
        id,
        company_name,
        position,
        company_url,
        start_date,
        end_date,
        summary,
        highlights
      ]
    )
    .then(() => {
      res.status(200).send(`Experiencia actualizada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVExperience(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Experiencias WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Experiencia eliminada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVExperience, updateCVExperience, deleteCVExperience }
