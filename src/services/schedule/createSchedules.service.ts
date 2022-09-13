import {AppDataSource} from "../../data-source";
import {Schedule} from "../../entities/schedules_users_properties.entity";
import {IScheduleRequest} from "../../interfaces/schedules"
import {Property} from "../../entities/property.entity"

const createScheduleService = async ({userId, propertyId, date, hour}: IScheduleRequest) => {
    const dateSchedule = date + " " + hour
    const scheduleTime = new Date(dateSchedule)
    const propertyRepository = AppDataSource.getRepository(Property)
    const scheduleRepository = AppDataSource.getRepository(Schedule);
    const newDateSchedule = scheduleTime.toString().split(" ")

    const impossibleToSchedule = await scheduleRepository.findOne({
        where: {
            propertyId: propertyId,
            date: date,
            hour: hour,
        }
    })

    const propertyExists = await propertyRepository.findOne({
        where: { id: propertyId}
    })

    if (!propertyExists){
        throw new Error("invalid property")
    }

    if(impossibleToSchedule){
        throw new Error("Can't schedule visit in this time or day!")
    }
    if(newDateSchedule[0] === "Sat" || newDateSchedule[0] === "Sun"){
        throw new Error("Invalid day!")
    }
    if(parseInt(newDateSchedule[4]) < 8 || parseInt(newDateSchedule[4]) > 18){
        throw new Error("Invalid hour!")
    }

    const newSchedule = scheduleRepository.create({
        date,
        hour,
        propertyId,
        user: userId
    })
    
    await scheduleRepository.save(newSchedule)

    return newSchedule
}

export default createScheduleService