import { PrismaClient } from './src/generated/prisma'

import dotenv from 'dotenv';
dotenv.config();

export const db = new PrismaClient(); 
