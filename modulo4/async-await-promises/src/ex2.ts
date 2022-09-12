import axios from "axios"
import { baseURL } from "./baseURL"

const getSubscribers = async (): Promise<any[]> => {
    const res = await axios.get(`${baseURL}/subscribers`);
    return res.data;
}     