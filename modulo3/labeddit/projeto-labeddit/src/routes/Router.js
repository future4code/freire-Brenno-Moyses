import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostPage from '../pages/PostPage/PostPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import Header from '../components/Header/Header';

export const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<LoginPage/>}/>   
                <Route path="feed" element={<FeedPage/>}/>
                <Route path="registration" element={<RegistrationPage/>}/>
                <Route path="post/:id" element={<PostPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}