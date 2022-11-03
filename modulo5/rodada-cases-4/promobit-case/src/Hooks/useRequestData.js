import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const getData = () => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message)
                setLoading(false);
            });
        };
    }, []);

    return { data, loading };
};