import React from 'react';
import brandIcon from '../../../assets/images/brand.png';

const Navbar = (props) => {

    return (
        <div className="container">
            <nav className='nav'>
                <div className='logo'>
                    <img src={brandIcon} alt="brand-img"/>
                    Company Website
                </div>

                <ul className='navbar'>
                    <li><a className='hover-border' href="#">Home</a></li>
                    <li><a className='hover-border' href="#">Services</a></li>
                    <li><a className='hover-border' href="#">Products</a></li>
                    <li><a className='hover-border' href="#">Contacts</a></li>
                </ul>
            </nav>
        </div>
    );

}

export default Navbar;