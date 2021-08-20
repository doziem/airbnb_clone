import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__icons' src='image/airbnb.png' alt='' />
            </Link>
            <div className='header__center'>
                <input type='text' placeholder='search' />
                <SearchIcon />
            </div>
            <div className='header__right'>
                <p>Become a host</p>
                <div className='dropdown'>
                    <LanguageIcon />
                    <ExpandMoreIcon />
                </div>
                <div className='header__account'>
                    <MenuIcon />
                    <Avatar className='header__avater' />
                </div>
            </div>

        </div>
    )
}

export default Header
