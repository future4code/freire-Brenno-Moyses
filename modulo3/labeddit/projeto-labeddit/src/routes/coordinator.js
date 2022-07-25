import { useNavigate } from "react-router-dom";

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToPost = (navigate) => {
    navigate("/post/:id")
}

export const goToRegistration = (navigate) => {
    navigate("/registration")
}