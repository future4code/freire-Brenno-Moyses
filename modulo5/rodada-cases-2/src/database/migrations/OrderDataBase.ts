import { IPizzaDB } from "../../models/Pizza"
import { Pizza } from "../../models/Pizza"
import { BaseDatabase } from "../BaseDatabase"

export class OrderDatabase extends BaseDatabase {
    public static TABLE_ORDERS = "Ambulnz_Orders"
    public static TABLE_ORDERS_ITEMS = "Ambulnz_Order_Items"

    public toPizzaDBModel = (pizza: Pizza): IPizzaDB => {
        return {
            name: pizza.getName(),
            price: pizza.getPrice()
        }
    }

    // public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    //     const result: IUserDB[] = await BaseDatabase
    //         .connection(UserDatabase.TABLE_USERS)
    //         .select()
    //         .where({ email })

    //     return result[0]
    // }

    // public createUser = async (user: User): Promise<void> => {
    //     const userDB = this.toUserDBModel(user)

    //     await BaseDatabase
    //         .connection(UserDatabase.TABLE_USERS)
    //         .insert(userDB)
    // }
}