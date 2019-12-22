import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png';




class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src={Logo} alt='logo' className='header__logo' ></img>
                <div className='header__buttons'>
                    <button className='header__icon'><i className="fa fa-th"></i>modulos</button>
                    <button className='header__icon'><i className="fa fa-sign-out"></i><p></p>Log Out</button>
                </div>
            </div>
        );
    }

}

export default Header;