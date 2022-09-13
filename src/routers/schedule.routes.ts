import {Router} from "express";
import authTokenMiddleware from "../middlewares/authAdm.middleware";
import createScheduleController from "../controllers/schedule/createSchedule.controller";
import listSchedulesByPropertyController from "../controllers/schedule/listSchedulesByProperty.controller";
const router = Router();

router.post("/", authTokenMiddleware, createScheduleController)
router.get("/properties/:id", authTokenMiddleware, listSchedulesByPropertyController)

export default router
