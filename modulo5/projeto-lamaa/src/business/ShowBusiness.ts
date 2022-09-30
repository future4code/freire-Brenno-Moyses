import { ShowDatabase } from "../database/ShowDatabase"
import { ConflictError} from "../errors/ConflictError"
import { ParamsError} from "../errors/ParamsError"
import { Authenticator} from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ICreateShowInputDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
        ){}

public createShow = async (input: ICreateShowInputDTO ) => {
    const {token, band, starts_at} = input

    if (typeof band !== "string") {
        throw new ParamsError("Parâmetro 'band' inválido: deve ser uma string")
    }

    if (typeof starts_at !== "string") {
        throw new ParamsError("Parâmetro 'starts_at' inválido: deve ser uma string")
    }

    if (band.length < 3) {
        throw new ParamsError("Parâmetro 'band' inválido: mínimo de 3 caracteres")
    }

    const startsAtFormated = new Date(
        starts_at.split("/").reverse().join("/")
    );

    const dateLimit = new Date ("2022/12/05")

    if (startsAtFormated.getTime() < dateLimit.getTime()){
        throw new ParamsError("Parâmetro 'starts_at' inválido: deve respeitar a data limite")
    }

    const payload = this.authenticator.getTokenPayload(token)

    if(!payload){
        throw new Error("Token inválido ")
    }

    if(payload.role !== USER_ROLES.ADMIN){
        throw new AuthenticationError("Você não tem permissão de Admin para executar essa função")
    }

    const isShowAlreadyExists = await this.showDatabase.findByShowDate(startsAtFormated)
        
    if (isShowAlreadyExists) {
        throw new ConflictError("Show já cadastrado")
    }

    const id = this.idGenerator.generate()

    const show = new Show(
        id,
        band,
        startsAtFormated,
    )

    await this.showDatabase.createShow(show)
    
    const response = {
        message: "Cadastro realizado com sucesso",
    }

    return response

    }
}