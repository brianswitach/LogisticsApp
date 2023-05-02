import express from 'express';
import cors from 'cors'
// importamos la conexión a la database
import db from './database/db.js'

import BlogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', BlogRoutes)

try {
    await db.authenticate()
    console.log('conexión exitosa a la db')
} catch (error) {
    console.log('el error de conexión es: ${error}')
}

// app.get('/', (req,res) => {
//     res.send('Hola Marce')
// })

app.listen(8000, ()=>{
    console.log('server up running in http://localhost:8000')
})
