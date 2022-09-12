import axios from "axios"
import { baseURL } from "./baseURL"

// a)Get

// b) Com promise

async function getSubscribers(): Promise <any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
}
