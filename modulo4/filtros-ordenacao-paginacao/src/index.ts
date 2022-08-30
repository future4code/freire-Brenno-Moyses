import { getFilterUsers } from "./endpoints/getFilterUsers"
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import dotenv from "dotenv";
import { getTypeFilterUsers } from "./endpoints/getTypeFilterUsers";

dotenv.config();

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/recipes", getFilterUsers)
app.get("/recipes/:type", getTypeFilterUsers)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})