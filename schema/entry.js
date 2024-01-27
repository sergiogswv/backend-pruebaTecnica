import { z } from 'zod'

export const entrySchema = z.object({
  uuid: z
    .string({ required_error: 'Campo de UUID obligatorio' })
    .trim()
    .min(36, { message: 'Error - UUID: Debe de tener 36 caracteres mínimo.' })
    .max(36, { message: 'Error - UUID: Debe de tener 36 caracteres mínimo.' }),
  title: z
    .string({ required_error: 'Campo de titulo obligatorio' })
    .trim()
    .min(3, { message: 'Error - Titulo: Debe de tener 3 caracteres mínimo.' })
    .max(100, {
      message: 'Error - Titulo: Debe de tener 100 caracteres mínimo.'
    }),
  author: z
    .string({ required_error: 'Campo de autor obligatorio' })
    .trim()
    .min(3, { message: 'Error - Autor: Debe de tener 3 caracteres mínimo.' })
    .max(30, { message: 'Error - Autor: Debe de tener 30 caracteres mínimo.' }),
  datePublished: z
    .string({ required_error: 'Campo de fecha obligatorio' }).transform((str) => new Date(str)),
  content: z
    .string({ required_error: 'Campo de contenido obligatorio' })
    .trim()
    .min(3, {
      message: 'Error - Contenido: Debe de tener 3 caracteres mínimo.'
    })
    .max(250, {
      message: 'Error - Contenido: Debe de tener 250 caracteres mínimo.'
    })
})
