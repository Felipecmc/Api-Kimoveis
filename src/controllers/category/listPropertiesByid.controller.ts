import { Request, Response } from 'express'
import listPropertiesByIdService from "../../services/category/listPropertiesById.service"

const listPropertiesByIdController = async (req: Request, res: Response) => {
    try {
        const categoryId = req.params.id
        const properties = await listPropertiesByIdService(categoryId)

        return res.status(200).json( properties)
    } catch (error) {
        if (error instanceof Error){
            if (error.message === "invalid category"){
                return res.status(404).json({message: error.message})
            }
            return res.status(400).json({message: error.message})
        }
    }
}

export default listPropertiesByIdController