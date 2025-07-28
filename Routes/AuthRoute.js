/**
 * @swagger
 * components:
 *   schemas:
 *     AuthUser:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           example: johndoe
 *         password:
 *           type: string
 *           example: strongpassword123
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthUser'
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input or user already exists
 *
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthUser'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized, invalid credentials
 */
import express from 'express'
import { registerUser, loginUser } from '../Controllers/AuthController.js'


const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router