import { User } from "../../entities/user.entity";
import {AppDataSource} from '../../data-source'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import {IUserLogin} from "../../interfaces/users"

const loginUserService = async ({email, password}: IUserLogin) => {
    const userRepository =  AppDataSource.getRepository(User)
    
    const user = await userRepository.findOne({
        where: {
            email: email
        }
    })

    if(!user){
        throw new Error("Invalid email or password")
    }

    if(!user.isActive){
        throw new Error("Invalid user")
    }


    const matchPassword = await compare(password, user.password)

    if(!matchPassword){
        throw new Error('Invalid email or password')
    }

    const token = jwt.sign(
        {
            isAdm: user.isAdm
        },
        process.env.SECRET_KEY as string,
        {
            subject: user.id,
            expiresIn: '24h'
        }
    )

    return token

}

export default loginUserService