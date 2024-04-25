import { Pool } from 'pg'
import { config } from 'dotenv'

process.env.NODE_ENV !== 'production' && config()

export const pool = new Pool({
  connectionString:
    process.env.POSTGRES_URL ?? process.env.DATABASE_URL + '?sslmode=require'
})
function conenctDB() {
  pool
    .connect()
    .then((client) => {
      console.log('Connected to the database')
      client.release()
    })
    .catch((err) => {
      console.error('Error connecting to the database: ', err)
    })
}

export default conenctDB
