import {AppDataSource} from "../../data-source";
import {Category} from "../../entities/category.entity"

const createCategoryService = async (name: any, isAdm: any) => {
    const categoryRepository = AppDataSource.getRepository(Category)

    const categories =  await categoryRepository.find()
    const categoryAlreadyExists =  categories.find(c => c.name === name)


    if(categoryAlreadyExists) {
        throw new Error("Category already exists")
    }
    if(!isAdm){
        throw new Error("Unauthorized user")
    }

    const newCategory = categoryRepository.create(
        { 
            name: name,
        }
    )

    await categoryRepository.save(newCategory)

    return newCategory
}

export default createCategoryService