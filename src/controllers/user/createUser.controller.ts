import createUserService from "../../services/user/createUser.service";
import { Request, Response } from 'express'
import {IUserRequest} from "../../interfaces/users"

const createUserController = async (req: Request, res: Response) => {
    try{
        const {email, name, password,isAdm}: IUserRequest = req.body

        const user = await createUserService({email, name, password, isAdm})

        return res.status(201).json(user)

    }catch(error){
        if(error instanceof Error){
            return res.status(400).json({message: error.message})
        }
    }
}

export default createUserController