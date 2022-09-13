import {AppDataSource} from "../../data-source";
import {Category} from "../../entities/category.entity"

const listcategoriesService = async () => {
    const categoryRepository = AppDataSource.getRepository(Category)

    const categories = await categoryRepository.find()

    return categories
}

export default listcategoriesService