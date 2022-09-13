import {AppDataSource} from "../../data-source";
import {Schedule} from "../../entities/schedules_users_properties.entity";
import {Property} from "../../entities/property.entity"

const listSchedulesByPropertyService = async (propertyId: any, isAdm: any) => {
    const scheduleRepository = AppDataSource.getRepository(Schedule)
    const propertyRepository = AppDataSource.getRepository(Property)

    const propertyExists = await propertyRepository.findOne({ 
        where: {id: propertyId}
    })

    if(!propertyExists) {
        throw new Error("Invalid Property")
    }

    if(!isAdm){
        throw new Error("Unauthorized user!")
    }
    const schedules = scheduleRepository.find({ 
        where: { propertyId: propertyId}
    })

    return schedules
}

export default listSchedulesByPropertyService