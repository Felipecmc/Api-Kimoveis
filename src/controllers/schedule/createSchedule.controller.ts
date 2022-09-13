import {Request, Response} from "express";
import createScheduleService from "../../services/schedule/createSchedules.service";

const createScheduleController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const propertyId = req.body.propertyId
        const date = req.body.date
        const hour = req.body.hour

        const schedule = await createScheduleService({userId, propertyId, date, hour})

        return res.status(201).json({message: "Schedule created successfully"})
    } catch (error) {
        if (error instanceof Error){
            if(error.message === "invalid property!"){
                return res.status(404).json({message: error.message})
            }
            return res.status(400).json({message: error.message})
        }
    }
}

export default createScheduleController