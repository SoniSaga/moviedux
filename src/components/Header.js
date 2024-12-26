import React from 'react';
import '../styles.css';

export default function Header() {  
    return (
        <div className='header'>
           <image className='logo' src='../../public/logo.png' alt='moviedux'/>
           <h2 className='app-subtitle'> It's time for popcorn and find your next movie here.</h2>
        </div>
    );
}