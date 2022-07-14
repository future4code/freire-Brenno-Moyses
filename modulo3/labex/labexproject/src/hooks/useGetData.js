import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";

export function useGetData(path) {

    const [data, setData] = useState([]);

    useEffect(()=>{
    axios
        .post(`${BASE_URL}${path}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        });
    },[]);
    return {data}
}