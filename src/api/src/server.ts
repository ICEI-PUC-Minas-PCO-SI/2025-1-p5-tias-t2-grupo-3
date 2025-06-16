import Fastify from 'fastify';
import dotenv from 'dotenv';
import { dumpsterRoutes } from './routes/dumpsters';
import { userRoutes } from './routes/users';
import { residueRoutes } from './routes/residues';
import { operationRoutes } from './routes/operations';
import { rentRoutes } from './routes/rent';

dotenv.config(); 

const app = Fastify({ logger: true });
app.register(dumpsterRoutes, { prefix: '/api/dumpsters' });
app.register(userRoutes, { prefix: '/api/users' });
app.register(residueRoutes, { prefix: '/api/residues' });
app.register(operationRoutes, { prefix: '/api/operations' });
app.register(rentRoutes, { prefix: '/api/rents' })

app.register(require('@fastify/cors'), {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

const PORT = Number(process.env.PORT) || 3000;
app.listen({ port: PORT, host: '0.0.0.0' })
  .then(() => console.log(`Servidor rodando em http://0.0.0.0:${PORT}`))
  .catch((err) => {
    console.error('Erro ao iniciar servidor:', err);
    process.exit(1);
  });
