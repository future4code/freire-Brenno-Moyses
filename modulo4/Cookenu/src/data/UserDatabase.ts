import { Recipe } from "../entities/Recipe";
import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void>{
        try{
        await BaseDatabase.connection('Users').insert({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword(),
        name: user.getName()
        })
        }catch(error: any){
        throw new Error(error.sqlMessage || error.message) 
        }
    } 

    public async findUserByEmail (email: string): Promise<User> {
        console.log(email)
        const user = await BaseDatabase.connection('Users').select('*').where({email})
        return user[0] && User.toUserModel(user[0]);
    }
    
    public async getProfile (id: string): Promise<User>{
        const user = await BaseDatabase.connection('Users').select("id","email","name").where({id})
        return user[0] && User.toUserModel(user[0]);
    }

    public async createRecipe (recipe: Recipe): Promise<void>{
        try{
            await BaseDatabase.connection('Recipes').insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                createdAt: recipe.getCreatedAt()
            })
        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getRecipe (id: string): Promise<Recipe>{
        const recipe = await BaseDatabase.connection('Recipes').select("title","description","createdAt").where({id})
        return recipe[0] && Recipe.toRecipeModel(recipe[0]);
    }

    public async getProfileId (id: string): Promise<User>{
        const profile = await BaseDatabase.connection('Users').select("id","email","name").where({id})
        return profile[0] && User.toUserModel(profile[0]);
    }

}