import { pool } from '../db'
import type { Request, Response } from 'express'

function createCVProfile(req: Request, res: Response) {
  const { network_name, user_name, network_url, person_id } = req.body
  pool
    .query(
      `INSERT INTO Perfiles (
              network_name,
              user_name,
              network_url,
              person_id
          ) VALUES ($1, $2, $3, $4)`,
      [network_name, user_name, network_url, person_id]
    )
    .then(() => {
      res.status(201).send(`Perfil creado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function updateCVProfile(req: Request, res: Response) {
  const { id, network_name, user_name, network_url } = req.body
  pool
    .query(
      `UPDATE Perfiles
          SET network_name = $2,
          user_name = $3,
          network_url = $4
          WHERE person_id = $1`,
      [id, network_name, user_name, network_url]
    )
    .then(() => {
      res.status(200).send(`Perfil actualizado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

function deleteCVProfile(req: Request, res: Response) {
  const { id } = req.body
  pool
    .query(`DELETE FROM Perfiles WHERE person_id = $1`, [id])
    .then(() => {
      res.status(200).send(`Perfil eliminado con éxito`)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { createCVProfile, updateCVProfile, deleteCVProfile }
