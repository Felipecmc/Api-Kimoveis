import { Request, Response } from 'express'
import createCategoryService from "../../services/category/createCategory.service"

const createCategoryController = async (req: Request, res: Response) => {
    try {
        const name = req.body.name 
        const isAdm =req.user.isAdm


        const category = await createCategoryService(name, isAdm)

        return res.status(201).json(category)
    } catch (error) {
        if (error instanceof Error){
            if(error.message === "Category already exists"){
                return res.status(400).json({message: error.message})
            }else{
                return res.status(403).json({message: error.message})
            }
 
        }
    }
}

export default createCategoryController