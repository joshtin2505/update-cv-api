import type { Request, Response } from 'express'
import { pool } from '../db'

function createCVVolunteer(req: Request, res: Response) {
  const {
    organization,
    position,
    organization_url,
    start_date,
    end_date,
    summary,
    highlights,
    person_id
  } = req.body
  pool
    .query(
      `INSERT INTO Voluntariados (
              organization,
              position,
              organization_url,
              start_date,
              end_date,
              summary,
              highlights,
              person_id
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        organization,
        position,
        organization_url,
        start_date,
        end_date,
        summary,
        highlights,
        person_id
      ]
    )
    .then(() => {
      res.status(201).send(`Voluntariado creado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVVolunteer(req: Request, res: Response) {
  const {
    id,
    organization,
    position,
    organization_url,
    start_date,
    end_date,
    summary,
    highlights
  } = req.body
  pool
    .query(
      `UPDATE Voluntariados
          SET organization = $2,
          position = $3,
          organization_url = $4,
          start_date = $5,
          end_date = $6,
          summary = $7,
          highlights = $8
          WHERE person_id = $1`,
      [
        id,
        organization,
        position,
        organization_url,
        start_date,
        end_date,
        summary,
        highlights
      ]
    )
    .then(() => {
      res.status(200).send(`Voluntariado actualizado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVVolunteer(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Voluntariados WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Voluntariado eliminado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVVolunteer, updateCVVolunteer, deleteCVVolunteer }
