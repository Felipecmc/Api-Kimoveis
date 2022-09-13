import { Request, Response } from 'express'
import listPropertiesService from '../../services/property/listProperties.service';

const listPropertiesController = async (req: Request, res: Response) => {
    try {
        const properties = await listPropertiesService()

        return res.status(200).json(properties);
    } catch (error) {
        if (error instanceof Error){
            return res.status(400).json({message: error.message})
        }
    }
}

export default listPropertiesController