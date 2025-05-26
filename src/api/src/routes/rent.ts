import { FastifyInstance } from "fastify";
import { db } from "../../db";
import { rent } from "../generated/prisma";

export const rentRoutes = async (app: FastifyInstance) => {
  app.get("/", async (_request, reply) => {
    try {
      const rent = await db.rent.findMany();
      return reply.send(rent);
    } catch (error) {
      reply.status(500).send(error);
    }
  });
  app.post("/", async (request, reply) => {
    try {
      const data = request.body as rent;
      const rent = await db.rent.create({ data });
      return reply.send(rent);
    } catch (error) {
      reply.status(500).send(error);
    }
  })
}