import express from 'express';
const app = express()
import apiRouter from './routes/api';
import cors from 'cors';
import { PORT } from './config';
import './database/index'

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})