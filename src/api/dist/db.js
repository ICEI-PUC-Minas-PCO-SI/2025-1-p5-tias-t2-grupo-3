"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const isDevelopment = process.env.NODE_ENV === "development";
const databaseUrl = isDevelopment
    ? `postgresql://matheus:Amarelo1@@localhost:5432/bravos`
    : process.env.DATABASE_URL;
exports.db = new client_1.PrismaClient({
    datasources: {
        db: {
            url: databaseUrl
        },
    },
});
