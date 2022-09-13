import {Router} from "express"
import createPropertyController from "../controllers/property/createProperty.controller"
import authTokenMiddleware from "../middlewares/authAdm.middleware"
import listPropertiesController from "../controllers/property/listProperties.controller"
const router = Router()

router.post('/', authTokenMiddleware, createPropertyController)
router.get("", listPropertiesController)

export default router