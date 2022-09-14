import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
import { AddressInfo } from "net";
import createUser from './endpoints/createUser';
import getAllUsers from './endpoints/getAllUsers';
import createProduct from './endpoints/createProduct';
import getAllProducts from './endpoints/getAllProducts';


const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user", createUser)
app.get("/users", getAllUsers)
app.post("/products", createProduct)
app.get("/products", getAllProducts)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});