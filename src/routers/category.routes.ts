import {Router} from "express"
import createCategoryController from "../controllers/category/createCategory.controller"
import authTokenMiddleware from "../middlewares/authAdm.middleware"
import listCategoriesController from "../controllers/category/listCategory.controller"
import listPropertiesByIdController from "../controllers/category/listPropertiesByid.controller"
const router = Router()

router.post("/", authTokenMiddleware, createCategoryController)
router.get("/", listCategoriesController)
router.get("/:id/properties",  listPropertiesByIdController)

export default router