import { pool } from '../db'
import type { Request, Response } from 'express'

function createCVLocation(req: Request, res: Response) {
  const { address, postal_code, city, country_code, region, person_id } =
    req.body
  pool
    .query(
      `INSERT INTO Location (
              address,
              postal_code,
              city,
              country_code,
              region,
              person_id
          ) VALUES ($1, $2, $3, $4, $5, $6)`,
      [address, postal_code, city, country_code, region, person_id]
    )
    .then(() => {
      res.status(201).send(`Ubicación creada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}
function updateCVLocation(req: Request, res: Response) {
  const { id, address, postal_code, city, country_code, region } = req.body
  pool
    .query(
      `UPDATE Location
          SET address = $2,
          postal_code = $3,
          city = $4,
          country_code = $5,
          region = $6
          WHERE person_id = $1`,
      [id, address, postal_code, city, country_code, region]
    )
    .then(() => {
      res.status(200).send(`Ubicación actualizada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVLocation(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Location WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Ubicación eliminada con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVLocation, updateCVLocation, deleteCVLocation }
