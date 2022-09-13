import { User } from "../../entities/user.entity";
import {AppDataSource} from "../../data-source";

const listUsersService = async (isAdm: any) => {

        const userRepository =  AppDataSource.getRepository(User)

        const users = await userRepository.find()
        if(!isAdm) {
            throw new Error("Unauthorized user")
        }
        if(!users){
            throw new Error("Can't find user")
        }

        const usersWithoutPassword: Object[] = []
        users.forEach(user => {
            const userWithoutPassword = {
                id: user.id,
                name: user.name,
                email: user.email,
                isAdm: user.isAdm,
                isActive: user.isActive,
                created_at: user.created_at,
                updated_at: user.updated_at,
            }
            usersWithoutPassword.push(userWithoutPassword)
        })



    return usersWithoutPassword
}

export default listUsersService