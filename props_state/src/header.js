import React,{useState} from 'react';

export default class Header extends React.Component{
    render(){
        return(
            <header className='navbar bg-dark navbar-dark fixed-top sticky-top'>
                <div className='navbar-header max-width'>
                    <a href='#' className='navbar-brand'>
                        Logo
                    </a>
                </div>
            </header>
        )
    }
}
