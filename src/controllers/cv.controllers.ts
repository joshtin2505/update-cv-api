import type { Request, Response } from 'express'
import { pool } from '../db'

function getCVById(req: Request, res: Response) {
  const { id } = req.params
  const parceId = Number(id)
  pool
    .query(
      `SELECT 
      json_build_object(
        'person', json_build_object(
            'name', Personas.name,
            'label', Personas.label,
            'image', Personas.image,
            'email', Personas.email,
            'phone', Personas.phone,
            'website', Personas.web_site,
            'summary', Personas.summary
        ),
        'location', json_build_object(
            'address', Location.address,
            'postalCode', Location.postal_code,
            'city', Location.city,
            'countryCode', Location.country_code,
            'region', Location.region
        ),
        'profile', json_build_object(
            'networkName', Perfiles.network_name,
            'username', Perfiles.user_name,
            'networkUrl', Perfiles.network_url
        ),
        'experiences', json_build_object(
            'companyName', Experiencias.company_name,
            'position', Experiencias.position,
            'companyUrl', Experiencias.company_url,
            'startDate', Experiencias.start_date,
            'endDate', Experiencias.end_date,
            'summary', Experiencias.summary,
            'highlights', Experiencias.highlights
        ),
        'volunteer', json_build_object(
            'organization', Voluntariados.organization,
            'position', Voluntariados.position,
            'organizationUrl', Voluntariados.organization_url,
            'startDate', Voluntariados.start_date,
            'endDate', Voluntariados.end_date,
            'summary', Voluntariados.summary,
            'highlights', Voluntariados.highlights
        ),
        'education', json_build_object(
            'institution', Educacion.institution,
            'institutionUrl', Educacion.institution_url,
            'area', Educacion.area,
            'studyType', Educacion.study_type,
            'startDate', Educacion.start_date,
            'endDate', Educacion.end_date,
            'score', Educacion.score,
            'courses', Educacion.courses
        ),
        'awards', json_build_object(
            'title', Premios.title,
            'date', Premios.date,
            'awarder', Premios.awarder,
            'summary', Premios.summary
        ),
        'certifications', json_build_object(
            'name', Certificados.name,
            'date', Certificados.date,
            'issuer', Certificados.issuer,
            'certificateUrl', Certificados.certificate_url
        ),
        'publications', json_build_object(
            'name', Publicaciones.name,
            'publisher', Publicaciones.publisher,
            'releaseDate', Publicaciones.release_date,
            'publicationUrl', Publicaciones.publication_url,
            'summary', Publicaciones.summary
        ),
        'skills', json_build_object(
            'name', Habilidades.name,
            'level', Habilidades.level,
            'keywords', Habilidades.keywords
        ),
        'languages', json_build_object(
            'language', Idiomas.language,
            'fluency', Idiomas.fluency
        ),
        'projects', json_build_object(
            'name', Proyectos.name,
            'isActive', Proyectos.is_active,
            'summary', Proyectos.summary,
            'highlights', Proyectos.highlights,
            'projectUrl', Proyectos.project_url
        )
    ) AS cv_data

        FROM Personas
        LEFT JOIN Location ON Personas.id = Location.person_id
        LEFT JOIN Perfiles ON Personas.id = Perfiles.person_id
        LEFT JOIN Experiencias ON Personas.id = Experiencias.person_id
        LEFT JOIN Voluntariados ON Personas.id = Voluntariados.person_id
        LEFT JOIN Educacion ON Personas.id = Educacion.person_id
        LEFT JOIN Premios ON Personas.id = Premios.person_id
        LEFT JOIN Certificados ON Personas.id = Certificados.person_id
        LEFT JOIN Publicaciones ON Personas.id = Publicaciones.person_id
        LEFT JOIN Habilidades ON Personas.id = Habilidades.person_id
        LEFT JOIN Idiomas ON Personas.id = Idiomas.person_id
        LEFT JOIN Proyectos ON Personas.id = Proyectos.person_id
        WHERE Personas.id = $1;`,
      [parceId]
    )
    .then((data) => {
      res.send(data.rows)
    })
    .catch((error) => {
      res.send(error)
    })
}

export { getCVById }
