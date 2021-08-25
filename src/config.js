import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 4000

export const HOSTNAME = process.env.HOSTNAME || ''
export const USER = process.env.USER || ''
export const DB_PASSWORD = process.env.PASSWORD || ''

export const SECRET = process.env.SECRET || ''
