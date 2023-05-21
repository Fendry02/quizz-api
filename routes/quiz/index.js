import { createQuizSchema, updateQuizSchema } from './schemas.js'
import { createQuizHandler } from './createQuizHandler.js'
import { updateQuizHandler } from './updateQuizHandler.js'
import { getQuizzesHandler } from './getQuizzesHandler.js'

export default async function (fastify) {
  fastify.post('/', { schema: createQuizSchema }, createQuizHandler)
  fastify.patch('/', { schema: updateQuizSchema }, updateQuizHandler)
  fastify.get('/', getQuizzesHandler)
}
