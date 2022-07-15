import {useNavigate} from "react-router-dom"

export const goToTravelForm = (navigate) => {
    navigate("/travelform")
}

export const goToHome = (navigate) => {
    navigate("/home")
}

export const goToTravelList = (navigate) => {
    navigate("/travellist")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToTravelDetails = (navigate, id) => {
    navigate(`/traveldetails/${id}`)
}

export const goToAdminArea = (navigate) => {
    navigate("/adminarea")
}

export const goToTravelCreation = (navigate) => {
    navigate("/travelcreation")
}