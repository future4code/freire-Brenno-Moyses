import { UserBusiness } from "../business/UserBusiness";
import { Response, Request } from "express";
import { ILoginInputDTO, ISignupInputDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response) => {
        try{
            const input: ISignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)
        }catch(error: any){
            res.status(400).send({message: error.message})
        }
    }

    public login = async (req: Request, res: Response) => {
        try{
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input)

            res.status(200).send(response)
        }catch(error: any){
            res.status(400).send({message: error.message})
        }
    }

}