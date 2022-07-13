import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/home/Home';
import TravelList from '../Pages/travelList/TravelList';
import TravelForm from '.././Pages/travelForm/TravelForm';

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