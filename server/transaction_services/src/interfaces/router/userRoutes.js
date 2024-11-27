import express from "express"
import { registerUser,getUsers,updateUser } from "../controller/userController.js"

const router = express.Router()

router.get('/see',getUsers)
router.post('/add',registerUser)
router.put('/update',updateUser)

export default router;