import {AppDataSource} from "../../data-source";
import {Property} from "../../entities/property.entity";

const listPropertiesService = () => {
    const propertiesRepository = AppDataSource.getRepository(Property)

    const properties = propertiesRepository.find()

    return properties
}

export default listPropertiesService