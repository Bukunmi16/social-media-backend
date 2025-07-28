/**
 * @swagger
 * /post:
 *   post:
 *     summary: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post created successfully
 *   get:
 *     summary: Get all posts
 *     responses:
 *       200:
 *         description: List of posts
 *
 * /post/{id}:
 *   get:
 *     summary: Get a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post found
 *   put:
 *     summary: Update a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post updated
 *   delete:
 *     summary: Delete a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post deleted
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId:
 *           type: string
 *         desc:
 *           type: string
 *         likes:
 *           type: array
 *           items:
 *             type: string
 *         image:
 *           type: string
 */

import express from 'express'
import { createPost, deletePost, getPost, getTimeLinePosts, likePost, updatePost } from '../Controllers/PostController.js'
const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimeLinePosts)

export default router 