import React from 'react'
import brand from '../../../assets/images/brand.png';
import facebook from '../../../assets/images/hollow-cut-facebook.svg';
import pinterest from '../../../assets/images/hollow-cut-pinterest.svg';
import linkedin from '../../../assets/images/hollow-cut-linkedin.svg';
import instagram from '../../../assets/images/hollow-cut-instagram.svg';
import twitter from '../../../assets/images/hollow-cut-twitter.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="container">
                    <img src={brand} alt="brand" />
                    <p>Smart Link Copyright &copy;</p>
                    <div className="social-media">
                        <img src={facebook} alt="facebook"/>
                        <img src={pinterest} alt="pinterest"/>
                        <img src={linkedin} alt="linkedin"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={twitter} alt="twitter"/>
                    </div>
                </div>
            </div>
            <div className="bottom-footer"></div>
        </footer>
    )
}

export default Footer;