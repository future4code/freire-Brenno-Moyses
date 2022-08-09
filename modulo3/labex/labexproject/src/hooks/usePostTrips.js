import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";

export function usePostTrips(path, token, body) {

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(()=>{
        setLoading(true);
        axios
            .post(`${BASE_URL}${path}`, body,{
                headers:{
                    auth: token
                }
            })
            .then((res)=>{
                console.log(res)
                setLoading(false);
                setTrips(res.data);
            })
            .catch((err)=>{
                console.log(err)
                setLoading(false);
                setError(err.data)
            });
    },[]);
    return {trips, loading, error}
}