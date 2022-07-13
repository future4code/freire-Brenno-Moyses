import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";

export function useGetTrips(path) {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(()=>{
        setLoading(true);
        axios
            .get(`${BASE_URL}${path}`)
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