import { IOrderDB, IOrderItem, IOrderItemDB, Order } from "../models/Order"
import { BaseDatabase } from "./BaseDatabase"
import { PizzaDatabase } from "./PizzaDatabase"

export class OrderDatabase extends BaseDatabase {
    public static TABLE_ORDERS = "Ambulnz_Orders"
    public static TABLE_ORDERS_ITEMS = "Ambulnz_Order_Items"

    public createOrder = async (orderId: string): Promise<void> => {
        await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDERS)
            .insert({
                id: orderId
            })
    }

    public insertItemOnOrder = async (orderItem: IOrderItemDB): Promise<void> => {
        await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDERS_ITEMS)
            .insert(orderItem)
    }

    public getPrice = async (pizzaName: string): Promise<number | undefined> => {
        const result: any[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .select("price")
            .where({name: pizzaName})

            return result[0].price as number
        }

    public getOrders = async (): Promise<IOrderDB[]> => {
        const result: IOrderDB[] = await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDERS)
            .select()
    
            return result
        }

    public getOrderItem = async (orderId: string): Promise<IOrderDB[]> => {
        const result: IOrderItemDB[] = await BaseDatabase
            .connection(OrderDatabase.TABLE_ORDERS_ITEMS)
            .select()
            .where({order_id: orderId})
    
            return result
        }    
}