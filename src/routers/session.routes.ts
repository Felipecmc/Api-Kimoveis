import {Router} from "express"
import loginUserController from "../controllers/user/loginUser.controller"

const router = Router()

router.post("", loginUserController)

export default router