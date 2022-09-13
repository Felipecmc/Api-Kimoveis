import { User } from "../../entities/user.entity";
import { hash } from "bcryptjs";
import {IUserRequest} from "../../interfaces/users/index"
import {AppDataSource} from "../../data-source"

const createUserService = async ({name, email, password, isAdm}: IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User);

    if(!email||!name||isAdm === null||!password){
        throw new Error( "All the informations are required!")
    }

    const emailAlreadyExists = await userRepository.findOne({
        where: {email: email}
    })

    if(emailAlreadyExists){
        throw new Error( "Email already in use!")
    }

    const hashedPassword = await hash(password, 10)
    const created_at = new Date();

    const newUser = await userRepository.create({
        email,
        name,
        isAdm,
        password: hashedPassword,
        isActive: true,
        created_at,
    })

    await userRepository.save(newUser)

    return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdm: newUser.isAdm,
        isActive: newUser.isActive,
        createdAt: newUser.created_at,
        updatedAt: newUser.updated_at,
    }
}

export default createUserService