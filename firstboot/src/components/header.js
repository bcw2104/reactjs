import React, { Component, useEffect } from 'react';
import './header.css';
import { LoggedIn, LoggedOut } from './login';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            userNickname: null
        };
    }

    componentDidMount = () => {
        let data = { id: 'bcw2104' };

        let query = Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');

        fetch('/api/user/state?' + query)
            .then((response) => response.json())
            .then((data) => {this.setState(data)});
    };
    render() {
        return (
            <header className='navbar bg-dark navbar-dark fixed-top sticky-top text-white'>
                <a href='/' className='navbar-brand'>
                    My Blog
                </a>
                {this.state.userId != null ? <LoggedIn userNickname={this.state.userNickname} /> : <LoggedOut />}
            </header>
        );
    }
}
