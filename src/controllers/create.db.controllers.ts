// import type { Request, Response } from 'express'
import { pool } from '../db'
function createCVTables() {
  pool.query(`
            CREATE TABLE IF NOT EXISTS Personas (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                password TEXT NOT NULL,
                label VARCHAR(255),
                image TEXT,
                email VARCHAR(255),
                phone VARCHAR(20),
                web_site VARCHAR(255),
                summary TEXT
            );

            CREATE TABLE IF NOT EXISTS Location (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                address VARCHAR(255),
                postal_code VARCHAR(20),
                city VARCHAR(100),
                country_code CHAR(2),
                region VARCHAR(100)
            );
            CREATE TABLE IF NOT EXISTS Perfiles (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                network_name VARCHAR(50) NOT NULL,
                user_name VARCHAR(100) NOT NULL,
                network_url VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS Experiencias (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                company_name VARCHAR(255) NOT NULL,
                position VARCHAR(255) NOT NULL,
                company_url VARCHAR(255),
                start_date DATE NOT NULL,
                end_date DATE,
                summary TEXT,
                highlights TEXT[]
            );

            CREATE TABLE IF NOT EXISTS Voluntariados (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                organization VARCHAR(255) NOT NULL,
                position VARCHAR(255) NOT NULL,
                organization_url VARCHAR(255),
                start_date DATE NOT NULL,
                end_date DATE,
                summary TEXT,
                highlights TEXT[]
            );

            CREATE TABLE IF NOT EXISTS Educacion (
                id SERIAL PRIMARY KEY,
                persona_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                institution VARCHAR(255) NOT NULL,
                institution_url VARCHAR(255),
                area VARCHAR(255) NOT NULL,
                study_type VARCHAR(100) NOT NULL,
                start_date DATE NOT NULL,
                end_date DATE,
                score VARCHAR(10),
                courses TEXT[]
            );

            CREATE TABLE IF NOT EXISTS Premios (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                title VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                awarder VARCHAR(255) NOT NULL,
                summary TEXT
            );

            CREATE TABLE IF NOT EXISTS Certificados (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                name VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                issuer VARCHAR(255) NOT NULL,
                certificate_url TEXT
            );

            CREATE TABLE IF NOT EXISTS Publicaciones (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                name VARCHAR(255) NOT NULL,
                publisher VARCHAR(255),
                release_date DATE NOT NULL,
                publication_url TEXT,
                summary TEXT
            );

            CREATE TABLE IF NOT EXISTS Habilidades (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                name VARCHAR(100) NOT NULL,
                level VARCHAR(50) NOT NULL,
                keywords TEXT[]
            );

            CREATE TABLE IF NOT EXISTS Idiomas (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                language VARCHAR(100) NOT NULL,
                fluency VARCHAR(50) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS Proyectos (
                id SERIAL PRIMARY KEY,
                person_id INT NOT NULL REFERENCES Personas(id) ON DELETE CASCADE ON UPDATE CASCADE,
                name VARCHAR(255) NOT NULL,
                is_active BOOLEAN NOT NULL,
                summary TEXT,
                highlights TEXT[],
                project_url TEXT
            );
      `)
}
function deleteCVTables() {
  pool.query(`
      DROP TABLE IF EXISTS Personas;
      DROP TABLE IF EXISTS Location;
      DROP TABLE IF EXISTS Perfiles;
      DROP TABLE IF EXISTS Experiencias;
      DROP TABLE IF EXISTS Voluntariados;
      DROP TABLE IF EXISTS Educacion;
      DROP TABLE IF EXISTS Premios;
      DROP TABLE IF EXISTS Certificados;
      DROP TABLE IF EXISTS Publicaciones;
      DROP TABLE IF EXISTS Habilidades;
      DROP TABLE IF EXISTS Idiomas;
      DROP TABLE IF EXISTS Proyectos;
      `)
}
export { createCVTables, deleteCVTables }
