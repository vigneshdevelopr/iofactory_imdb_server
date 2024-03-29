import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { createConnection } from './dbconfig.js'
import { authRouter } from './Routes/auth.js'
import { moviesRouter } from './Routes/movies.js'
import { actorsRouter } from './Routes/actors.js'
dotenv.config()


const PORT = process.env.PORT

const app = express()

app.use(express.json())
createConnection()
app.use(cors())


app.use('/auth', authRouter)
app.use('/movies', moviesRouter)
app.use('/actors', actorsRouter)






app.listen(PORT, ()=>{
    try {
        console.log(`Your Server has been listening on ${PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})



