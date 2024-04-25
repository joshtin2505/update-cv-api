import type { Request, Response } from 'express'
import { pool } from '../db'

function createCVEducation(req: Request, res: Response) {
  const {
    institution,
    institution_url,
    area,
    study_type,
    start_date,
    end_date,
    score,
    courses,
    person_id
  } = req.body
  pool
    .query(
      `INSERT INTO Educacion (
              institution,
              institution_url,
              area,
              study_type,
              start_date,
              end_date,
              score,
              courses,
              person_id
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        institution,
        institution_url,
        area,
        study_type,
        start_date,
        end_date,
        score,
        courses,
        person_id
      ]
    )
    .then(() => {
      res.status(201).send(`Educación creada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVEducation(req: Request, res: Response) {
  const {
    id,
    institution,
    institution_url,
    area,
    study_type,
    start_date,
    end_date,
    score,
    courses
  } = req.body
  pool
    .query(
      `UPDATE Educacion
          SET institution = $2,
          institution_url = $3,
          area = $4,
          study_type = $5,
          start_date = $6,
          end_date = $7,
          score = $8,
          courses = $9
          WHERE person_id = $1`,
      [
        id,
        institution,
        institution_url,
        area,
        study_type,
        start_date,
        end_date,
        score,
        courses
      ]
    )
    .then(() => {
      res.status(200).send(`Educación actualizada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVEducation(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Educacion WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Educación eliminada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVEducation, updateCVEducation, deleteCVEducation }
