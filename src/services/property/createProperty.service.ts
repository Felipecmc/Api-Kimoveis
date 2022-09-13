import {AppDataSource} from "../../data-source";
import {Property} from "../../entities/property.entity"
import { Address } from "../../entities/addresses.entity";
import {Category} from "../../entities/category.entity"
import {IPropertyRequest, IAddressRequest} from "../../interfaces/properties"

const createPropertyService = async (property: any, address: IAddressRequest, isAdm: any) => {
    const propertyRepository = AppDataSource.getRepository(Property)
    const addressRepository = AppDataSource.getRepository(Address)
    const categoryRepository = AppDataSource.getRepository(Category)

    const addressAlreadyExists = await addressRepository.findOne({ 
        where: { 
            district: address.district,
            zipCode: address.zipCode,
            number: address.number,
            city: address.city,
            state: address.state
        }
    })

    const categoryIsValid = await categoryRepository.findOne({ 
        where: {id: property.categoryId}
    })

    if (!categoryIsValid){
        throw new Error("invalid category")
    }
    if(address.zipCode.length > 8){
        throw new Error("Invalid Zip Code!")
    }
    if(address.state.length > 2){
        throw new Error("Invalid State!")
    }
    if(addressAlreadyExists !== null){
        throw new Error("Address already in use!")
    }
    if(!isAdm){
        throw new Error("Invalid user!")
    }

    const newAddress = addressRepository.create(address)

    await addressRepository.save(newAddress)

    const newPropertyInfo: IPropertyRequest = {
        value: property.value,
        size: property.size,
        address: newAddress,
        categoryId: property.categoryId
    }

    const newProperty = propertyRepository.create(newPropertyInfo)
    await propertyRepository.save(newProperty)
    

    return {
        id : newProperty.id,
        value: newProperty.value,
        size: newProperty.size,
        sold: newProperty.sold,
        category: newProperty.categoryId,
        address: newAddress,
        createdAt: newProperty.created_at,
        updatedAt: newProperty.updated_at
    }
}

export default createPropertyService