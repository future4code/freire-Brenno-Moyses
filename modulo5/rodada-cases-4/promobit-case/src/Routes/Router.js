import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/details/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}