import {Router} from "express"
import createUserController from "../controllers/user/createUser.controller"
import listUsersController from "../controllers/user/listUsers.controller"
import authTokenMiddleware from "../middlewares/authAdm.middleware"
import deleteUserController from "../controllers/user/deleteUser.controller"
const router = Router()

router.post('', createUserController)
router.get('', authTokenMiddleware, listUsersController)
router.delete('/:id', authTokenMiddleware, deleteUserController)

export default router