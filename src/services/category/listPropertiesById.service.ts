import {AppDataSource} from "../../data-source";
import {Category} from "../../entities/category.entity"
import {Property} from "../../entities/property.entity"

const listPropertiesById = async (categoryId: any) => {
    const propertyRepository = AppDataSource.getRepository(Property)
    const categoryRepository = AppDataSource.getRepository(Category)

    const category = await categoryRepository.findOne({
        where : { id: categoryId}
    })
    const properties = await propertyRepository.find({
        where: { categoryId: categoryId}
    })

    if(!category){
        throw new Error("invalid category")
    }

    if(!properties) {
        throw new Error("Invalid Id!")
    }

    return {
        id: category.id,
        name: category.name,
        properties: properties
    }

}

export default listPropertiesById