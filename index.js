import express from 'express'
import bodyParser from 'body-parser'
import mongoose, { Mongoose } from 'mongoose'
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
// Routes

const app = express()

// Genomacholdings_5280
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

dotenv.config()

mongoose
.connect(process.env.MONGO_DB)
.then(() => app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`)))
.catch((error) => console.log(error));

// Usage of Routes
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)