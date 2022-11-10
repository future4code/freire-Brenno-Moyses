import React, { useState, useEffect } from "react";
import { BASE_URL, KEY_API } from "../../Constants/constants";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailsHeader from "../../Components/DetailsHeader/DetailsHeader";

const Details = () => {
    const {id} = useParams()
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios
        .get(`${BASE_URL}/movie/${id}?api_key=${KEY_API}&language=en-US`)
            .then((res) => {
                setDetails(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })   
    },[setDetails])

    return (
        <div>
            <DetailsHeader
            details = {details}
            />
            <h1>Elenco original</h1>
        </div>
    )
}

export default Details