import { createEntry, getEntriesModel, getOneEntryModel } from '../models/entry.js'

export const create = async (req, res) => {
  const { uuid, title, author, datePublished, content } = req.body
  console.log({ body: req.body })
  try {
    const result = await createEntry({ uuid, title, author, datePublished, content })
    return res.json(result)
  } catch (error) {
    return { error: 'Ocurrio un error' }
  }
}

export const getEntries = async (req, res) => {
  try {
    const result = await getEntriesModel()
    return res.json(result[0])
  } catch (error) {
    return { error: 'Ocurrio un error' }
  }
}

export const getOneEntry = async (req, res) => {
  const { title, author, content } = req.query
  try {
    const result = await getOneEntryModel({ title, author, content })
    return res.json(result[0])
  } catch (error) {
    return { error: 'Ocurrio un error' }
  }
}
