import React, { Component } from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import { Home,Mypage } from '../pages/index';
import Header from '../components/header';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <div className='container my-5'>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route exact path="/mypage" element={<Mypage />}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}