import { Request, Response } from 'express'
import listcategoriesService from '../../services/category/listcategory.service'

const listCategoriesController = async (req: Request, res: Response) => {
    try {

        const categories = await listcategoriesService()

        return res.status(200).json(categories)
    } catch (error) {
        if (error instanceof Error){
            return res.status(400).json({message: error.message})
        }
    }
}

export default listCategoriesController