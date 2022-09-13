import { Request, Response} from 'express'
import {IUserLogin} from "../../interfaces/users"
import loginUserService from "../../services/user/loginUser.service"

const loginUserController = async (req: Request, res: Response) => {
    try {
        const {email, password}: IUserLogin = req.body
        const token = await loginUserService({email, password})
        return res.json({token})
    
    } catch (error) {
        if (error instanceof Error){
            return res.status(403).json({message: error.message})
        }
    }

}

export default loginUserController