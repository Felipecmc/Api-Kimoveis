import { Request, Response } from 'express'
import {IAddressRequest} from "../../interfaces/properties"
import createPropertyRequest from "../../services/property/createProperty.service"

const createPropertyController = async (req: Request, res: Response) => {
    try{
        const property = {
            value: req.body.value,
            size: req.body.size,
            categoryId: req.body.categoryId
        }

        const address: IAddressRequest = req.body.address
        const isAdm = req.user.isAdm

        const newProperty = await createPropertyRequest(property, address, isAdm)

        return res.status(201).json(newProperty)

    }catch(error){
        if(error instanceof Error){
            if(error.message === 'Invalid user'){
                return res.status(403).json({message: error.message})
            }else{
                return res.status(400).json({message: error.message})
            }

        }
    }
}

export default createPropertyController