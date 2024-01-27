import { Router } from 'express'
import { create, getEntries, getOneEntry } from '../controller/Entry.js'

export const entryRoutes = Router()

entryRoutes.post('/', create)
entryRoutes.get('/', getEntries)
entryRoutes.get('/entry', getOneEntry)
