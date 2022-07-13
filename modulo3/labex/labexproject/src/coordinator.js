import {useNavigate} from "react-router-dom"

export const goToTravelForm = (navigate) => {
    navigate("/travelform")
}

export const goToHome = (navigate) => {
    navigate(-1)
}

export const goToTravelList = (navigate) => {
    navigate("/travellist")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToTravelDetails = (navigate) => {
    navigate("/traveldetails")
}