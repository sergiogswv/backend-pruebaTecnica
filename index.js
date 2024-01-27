import express from 'express'
import cors from 'cors'
import { entryRoutes } from './routes/entry.js'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.APP_PORT || 4000

app.use('/api/v1/entries', entryRoutes)

app.listen(PORT, () => {
  console.log('Server is enabled')
})
