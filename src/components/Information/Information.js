import React from 'react'
import InfoItem from '../InfoItem/InfoItem';
import clock from '../../assets/images/alarm-clock-2-64.png';
import cloud from '../../assets/images/cloud-3-64.png';
import cart from '../../assets/images/cart-7-64.png';

const Information = () => {
    return (
        <div className='info container'>
            <ul>
                <li>
                    <InfoItem icon={clock} title='Alarm'>
                        doloremque culpa officia et fugit saepe repudiandae! doloremque culpa officia et fugit saepe repudiandae! Magni sapiente culpa aperiam modi cupiditate dolores.
                    </InfoItem>
                </li>
                <li>
                    <InfoItem icon={cloud} title='Clouding'>
                        doloremque culpa officia et fugit saepe repudiandae! doloremque culpa officia et fugit saepe repudiandae! Magni sapiente culpa aperiam modi cupiditate dolores.
                    </InfoItem>
                </li>
                <li>
                    <InfoItem icon={cart} title='Shopping'>
                        doloremque culpa officia et fugit saepe repudiandae! doloremque culpa officia et fugit saepe repudiandae! Magni sapiente culpa aperiam modi cupiditate dolores.
                    </InfoItem>
                </li>
            </ul>    
        </div>
    )
}

export default Information;