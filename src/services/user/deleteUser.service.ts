import { User } from "../../entities/user.entity";
import {AppDataSource} from "../../data-source";

const deleteUserService = async (deleteId:any , isAdm:any) => {

    const idToDelete = deleteId.toString();
    const userRepository =  AppDataSource.getRepository(User)

    const userToDelete = await userRepository.findOne({
        where: {id: idToDelete}
    })
  


    if(userToDelete?.isActive === false){
        throw new Error(`User is not active`)
    }

    if (!isAdm){
        throw new Error("User is not authorized")
    }


    const result = await userRepository.createQueryBuilder()
    .update({
        isActive: false
    })
    .where({
        id: idToDelete
    })
    .returning('*')
    .execute()

    return result.raw

}

export default deleteUserService