import { DataTypes } from 'sequelize'
import { fnSequelize } from '../config/db.js'
import { entrySchema } from '../schema/entry.js'

export const createEntry = async ({ uuid, title, author, datePublished, content }) => {
  try {
    const result = await entrySchema.safeParseAsync({
      uuid,
      title,
      author,
      datePublished,
      content
    })

    if (!result.success) {
      return result.error
    }

    const { data } = result

    const sequelize = fnSequelize()
    const queryInterface = sequelize.getQueryInterface()

    await queryInterface.createTable('entries', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
      },
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      datepublished: DataTypes.DATEONLY,
      content: DataTypes.STRING
    })

    await sequelize.query(
        `
          INSERT INTO ENTRIES VALUES (:uuid, :title, :author, :datePublished, :content);
        `, {
          replacements: {
            uuid: data.uuid,
            title: data.title,
            author: data.author,
            datePublished: data.datePublished,
            content: data.content
          }
        }
    )

    sequelize.close()
    return { msg: 'Entrada creada' }
  } catch (e) {
    return { error: 'Ocurrio un error' }
  }
}

export const getEntriesModel = async () => {
  try {
    const sequelize = fnSequelize()
    const entries = await sequelize.query(
      `
        SELECT * FROM ENTRIES
      `
    )

    sequelize.close()
    return entries
  } catch (error) {
    return { error: 'Ocurrio un error' }
  }
}

export const getOneEntryModel = async ({ title, author, content }) => {
  const cleanTitle = title === undefined ? null : title
  const cleanAuthor = author === undefined ? null : author
  const cleanContent = content === undefined ? null : content
  try {
    const sequelize = fnSequelize()
    const entries = await sequelize.query(
      `
        SELECT * FROM ENTRIES WHERE
        title like :title
        or author like :author
        or content like :content
      `, {
        replacements: {
          title: `%${cleanTitle}%`,
          author: `%${cleanAuthor}%`,
          content: `%${cleanContent}%`
        }
      }
    )

    sequelize.close()
    return entries
  } catch (error) {
    return { error: 'Ocurrio un error' }
  }
}
