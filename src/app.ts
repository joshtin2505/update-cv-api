import express from 'express'
import morgan from 'morgan'
import cvRoutes from './routes/cv.routes'
import personsRoutes from './routes/person.routes'
import locationRoutes from './routes/location.routes'
import profilesRoutes from './routes/profiles.routes'
import experienceRoutes from './routes/experience.routes'
import volunteerRoutes from './routes/volunteer.routes'
import educationRoutes from './routes/education.routes'
import awardsRoutes from './routes/award.routes'
import certificationsRoutes from './routes/certificate.routes'
import publicationsRoutes from './routes/publications.routes'
import skillsRoutes from './routes/skills.routes'
import languagesRoutes from './routes/languages.routes'
import projectsRoutes from './routes/projects.routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/cv', cvRoutes)
app.use('/api/persons', personsRoutes)
app.use('/api/skills', skillsRoutes)
app.use('/api/volunteer', volunteerRoutes)
app.use('/api/publications', publicationsRoutes)
app.use('/api/education', educationRoutes)
app.use('/api/experience', experienceRoutes)
app.use('/api/projects', projectsRoutes)
app.use('/api/languages', languagesRoutes)
app.use('/api/certifications', certificationsRoutes)
app.use('/api/location', locationRoutes)
app.use('/api/profiles', profilesRoutes)
app.use('/api/awards', awardsRoutes)

export default app
