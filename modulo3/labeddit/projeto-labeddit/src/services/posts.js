import axios from 'axios';
import { BASE_URL } from '../constants/urls';

    export const createVote = (id) => {

    const body = {
        "direction": 1
    }

    axios.post(`${BASE_URL}/posts/${id}/votes`, body , {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) =>{
        alert(res.data)
    })
    .catch((err) =>{
        alert(err.response.message)
    })
}

    export const changeVote = (id) => {

        const body = {
            "direction": -1
        }

        axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            alert(res.data)
        })
        .catch((err) =>{
            alert(err.response.message)
        })
    }

