import { FastifyInstance } from 'fastify'
import { db } from '../../db'
import { operations } from '../generated/prisma'

export const operationRoutes = async (app: FastifyInstance) => {
  app.get('/', async (_request, reply) => {
    try {
      const operations = await db.operations.findMany()
      return reply.send(operations)
    } catch (error) {
      reply.status(500).send(error)
    }
  })

  app.post('/', async (request, reply) => {
    try {
      const data = request.body as operations
      const operation = await db.operations.create({ data })
      return reply.send(operation)
    } catch (error) {
      reply.status(500).send(error)
    }
  })
}