import * as jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();

export interface AuthenticationData{
    id: string,
}

export class Authenticator {
    public generate(input: AuthenticationData): string{
        const token = jwt.sign(input, process.env.JWT_KEY as string, {
            expiresIn: process.env.EXPIRES_IN
        });
        return token;
    }

    public getTokenData(token: string): AuthenticationData{
        const data = jwt.verify(token, process.env.JWT_KEY as string)
        return data as AuthenticationData
    }
}