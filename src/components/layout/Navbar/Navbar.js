import React, { Component } from 'react';
import brandIcon from '../../../assets/images/brand.png';
import burger from '../../../assets/images/burger.svg';

class Navbar extends Component {

    state = {
        mobile_nav_links: false
    }

    toggleNavlinks = () => {
        this.setState(prevState => ({
            mobile_nav_links: !prevState.mobile_nav_links
        }));
    }

    render() {

        let mobile_links_content;
        if(this.state.mobile_nav_links) {
            mobile_links_content = (
                <div className='mobile-links-content'>
                    <ul>
                        <li><a className='hover-border-mobile' href="#">Home</a></li>
                        <li><a className='hover-border-mobile' href="#">Services</a></li>
                        <li><a className='hover-border-mobile' href="#">Products</a></li>
                        <li><a className='hover-border-mobile' href="#">Contacts</a></li>
                    </ul>
                </div>
            );
        }
        else {
            mobile_links_content = null;
        }

        return (
            <div className="container">
                <nav className='nav'>
                    <div className='logo'>
                        <img src={brandIcon} alt="brand-img"/>
                        Smart Link
                    </div>

                    <div className='hide-in-desktop'>
                        <div className="mobile-contents">
                            {mobile_links_content}
                            <img src={burger} alt="Burger" className='burger' onClick={this.toggleNavlinks} />
                        </div>
                    </div>

                    <ul className='navbar hide-in-mobile'>
                        <li><a className='hover-border' href="#">Home</a></li>
                        <li><a className='hover-border' href="#">Services</a></li>
                        <li><a className='hover-border' href="#">Products</a></li>
                        <li><a className='hover-border' href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;