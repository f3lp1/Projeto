import { Routes } from "./routes"
import express from 'express'


const app = express()

app.use(express.json())

app.use(Routes)

app.listen(3333, () => console.log('Server is running'))