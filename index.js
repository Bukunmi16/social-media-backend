import express from 'express'
import bodyParser from 'body-parser'
import mongoose, { Mongoose } from 'mongoose'
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from "swagger-ui-express"
// Routes

const app = express()
app.use(cors()) 

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

const options = {
    definition:{
        openapi: "3.0.0",
         info: {
            title: "Social Media API with Swagger",
            version: "1.0.0",
            description: "A simple Express API with Swagger documentation",
    },
        servers: [
            {
                url: "gihub-social-media-backend-production.up.railway.app"
            },
        ],
    },
    apis: ["./Routes/*.js"],
}

const spacs = swaggerJSDoc(options)
app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(spacs)
)