import type { Request, Response } from 'express'
import { pool } from '../db'

function getCVById(req: Request, res: Response) {
  const {
    id,
    email
  }: { id?: number; email?: `${string}@${string}.${string}` } = req.body
  pool
    .query(
      `SELECT 
        Personas.name,
        Personas.label,
        Personas.image,
        Personas.email,
        Personas.phone,
        Personas.web_site,
        Personas.summary,

        Location.address,
        Location.postal_code,
        Location.city,
        Location.country_code,
        Location.region,

        Perfiles.network_name,
        Perfiles.user_name,
        Perfiles.network_url, 

        Experiencias.company_name,
        Experiencias.position,
        Experiencias.company_url,
        Experiencias.start_date,
        Experiencias.end_date,
        Experiencias.summary,
        Experiencias.highlights,

        Voluntariados.organization,
        Voluntariados.position,
        Voluntariados.organization_url,
        Voluntariados.start_date,
        Voluntariados.end_date,
        Voluntariados.summary,
        Voluntariados.highlights,

        Educacion.institution,
        Educacion.institution_url,
        Educacion.area,
        Educacion.study_type,
        Educacion.start_date,
        Educacion.end_date,
        Educacion.score,
        Educacion.courses,

        Premios.title,
        Premios.date,
        Premios.awarder,
        Premios.summary,

        Certificados.name,
        Certificados.date,
        Certificados.issuer,
        Certificados.certificate_url,

        Publicaciones.name,
        Publicaciones.publisher,
        Publicaciones.release_date,
        Publicaciones.publication_url,
        Publicaciones.summary,

        Habilidades.name,
        Habilidades.level,
        Habilidades.keywords,

        Idiomas.language,
        Idiomas.fluency,

        Proyectos.name,
        Proyectos.is_active,
        Proyectos.summary,
        Proyectos.highlights,
        Proyectos.project_url

        FROM Personas
        LEFT JOIN Perfiles ON Personas.id = Perfiles.persona_id
        LEFT JOIN Experiencias ON Personas.id = Experiencias.persona_id
        LEFT JOIN Voluntariados ON Personas.id = Voluntariados.persona_id
        LEFT JOIN Educacion ON Personas.id = Educacion.persona_id
        LEFT JOIN Premios ON Personas.id = Premios.persona_id
        LEFT JOIN Certificados ON Personas.id = Certificados.persona_id
        LEFT JOIN Publicaciones ON Personas.id = Publicaciones.persona_id
        LEFT JOIN Habilidades ON Personas.id = Habilidades.persona_id
        LEFT JOIN Idiomas ON Personas.id = Idiomas.persona_id
        LEFT JOIN Proyectos ON Personas.id = Proyectos.persona_id
        WHERE Personas.id = $1 OR Personas.email = $2 ;`,
      [id, email]
    )
    .then((data) => {
      res.send(data.rows)
    })
    .catch((error) => {
      console.error(error)
    })
}

export { getCVById }
