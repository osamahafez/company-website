import React from 'react';

const Navbar = (props) => {

    return (
        <div className="container">
            <nav className='nav'>
                <div className='logo'>Company Website</div>

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