import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import TravelList from '../Pages/TravelList/TravelList';
import TravelForm from '../Pages/TravelForm/TravelForm';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="travellist" element={<TravelList/>}/>
                <Route path="travelform" element={<TravelForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}