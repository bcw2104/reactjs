import React, { Component } from 'react';
import {Routes, Route } from 'react-router-dom';
import { Home,Mypage } from '../pages/index';
import Header from './header';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <div className='container my-5'>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/mypage" element={<Mypage />}/>
                    </Routes>
                </div>
            </div>
        );
    }
}