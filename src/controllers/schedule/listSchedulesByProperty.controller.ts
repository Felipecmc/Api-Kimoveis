import {Request, Response} from "express";
import listSchedulesByPropertyService from "../../services/schedule/listSchedulesByProperty.service";

const listSchedulesByPropertyController = async (req:Request, res:Response) => {{
    try {
        const propertyId = req.params.id;
        const isAdm = req.user.isAdm ;

        const schedules = await listSchedulesByPropertyService(propertyId, isAdm)

        return res.status(200).json({schedules: schedules});
    } catch (error) {
        if (error instanceof Error){
            if(error.message === "Unauthorized user!"){
                return res.status(403).json({message: error.message});
            }
            return res.status(400).json({message: error.message})
        }
    }
}}

export default listSchedulesByPropertyController;