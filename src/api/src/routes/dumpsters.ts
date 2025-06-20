import { FastifyInstance } from "fastify";
import { db } from "../../db";
import { dumpsters } from "../generated/prisma";

export const dumpsterRoutes = async (app: FastifyInstance) => {
  app.get("/", async (_request, reply) => {
    try {
      const dumpsters = await db.dumpsters.findMany();
      return reply.send(dumpsters);
    } catch (error) {
      reply.status(500).send(error);
    }
  });
  app.post("/", async (request, reply) => {
    try {
      const data = request.body as dumpsters;
      console.log(request.body, " request.body");

      const dumpster = await db.dumpsters.create({ data });
      reply.send(dumpster);
    } catch (error) {
      console.error(error);
      reply.status(500).send(error);
    }
  });
  app.put("/:id", async (request, reply) => {
    try {
      const { id } = request.params as { id: string };
      const data = request.body as dumpsters;
      const dumpster = await db.dumpsters.update({
        where: { id: parseInt(id) },
        data,
      });
      reply.send(dumpster);
    } catch (error) {
      reply.status(500).send(error);
    }
  });
};
