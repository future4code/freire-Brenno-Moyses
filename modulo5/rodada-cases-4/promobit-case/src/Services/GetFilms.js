import axios from "axios";
import { useEffect, useState } from "react"

export const GetFilms = (url) => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios
        .get(url)
            .then((res) => {
                setFilms(res.data.results)
                console.log(res.data.results)
            })
            .catch((err) => {
                console.log(err.response)
            })

            return films

    },[url])
}