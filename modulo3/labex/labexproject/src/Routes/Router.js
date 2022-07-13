import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/home/Home';
import TravelList from '../Pages/travelList/TravelList';
import TravelForm from '.././Pages/travelForm/TravelForm';
import Login from '../Pages/login/Login';
import TravelDetails from '../Pages/travelDetails/TravelDetails'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="travellist" element={<TravelList/>}/>
                <Route path="travelform" element={<TravelForm/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="traveldetails" elemnts={<TravelDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}