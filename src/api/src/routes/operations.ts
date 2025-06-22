import { FastifyInstance } from 'fastify'
import { db } from '../../db'
import { operations } from '../generated/prisma'
import moment from 'moment'

export const operationRoutes = async (app: FastifyInstance) => {
  app.get('/', async (_request, reply) => {
    try {
      const operations = await db.operations.findMany()
      return reply.send(operations)
    } catch (error) {
      reply.status(500).send(error)
    }
  });

  app.post('/', async (request, reply) => {
    try {
      const data = request.body as operations
      const operation = await db.operations.create({ data })
      return reply.send(operation)
    } catch (error) {
      reply.status(500).send(error)
    }
  });

  app.put("/:id", async (request, reply) => {
    try {
      const { id } = request.params as { id: string };
      const data = request.body as any;
        const operation = await db.operations.update({
          where: { id: parseInt(id) },
          data: {
            ...data,
            date: moment(data.date).toDate()
          },
        });
        reply.send(operation);
      } catch (error) {
        reply.status(500).send(error);
      }
    });
}