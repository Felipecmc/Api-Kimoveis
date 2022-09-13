import { Request, Response } from 'express'
import deleteUserService from "../../services/user/deleteUser.service"

const deleteUserController = async (req: Request, res: Response) => {
    try {
        const deleteId = req.params.id
        const isAdm = req.user.isAdm

        const deleted = await deleteUserService(deleteId, isAdm)

        return res.send()
    } catch (error) {
        if (error instanceof Error && error.message === "User is not authorized"){
            return res.status(403).json({ message: error.message})
        } else if (error instanceof Error && error.message === `User is not active`){
            return res.status(400).json({ message: error.message})
        }
    }
}

export default deleteUserController