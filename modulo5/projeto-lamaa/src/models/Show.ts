export interface IShowDB {
    id: string,
    band: string,
    starts_at: Date,
}

export class Show {
    constructor(
        private id: string,
        private band: string,
        private starts_at: Date,
    ) {}

    public getId = () => {
        return this.id
    }

    public getBand = () => {
        return this.band
    }

    public getStarts = () => {
        return this.starts_at
    }
}

export interface ICreateShowInputDTO {
    token: string,
    band: string,
    starts_at: string,  
}