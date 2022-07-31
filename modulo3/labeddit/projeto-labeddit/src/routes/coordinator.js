import { useNavigate } from "react-router-dom";

export const goToFeed = (navigate) => {
    navigate("/feed")
}

export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const goToRegistration = (navigate) => {
    navigate("/registration")
}