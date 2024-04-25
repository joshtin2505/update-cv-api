import express from 'express'
import morgan from 'morgan'
import personsRoutes from './routes/person.routes'
import cvRoutes from './routes/cv.routes'
// import skillsRoutes from './routes/skills.routes'
// import volunteerRoutes from './routes/volunteer.routes'
// import publicationsRoutes from './routes/publications.r
// import educationRoutes from './routes/education.routes'
// import experienceRoutes from './routes/experience.routes'
// import projectsRoutes from './routes/projects.routes'
// import languagesRoutes from './routes/languages.routes'
// import coursesRoutes from './routes/courses.routes'
// import certificationsRoutes from './routes/certifications.routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/api/cv', cvRoutes)
app.use('/api/persons', personsRoutes)
export default app
