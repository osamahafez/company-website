import React from 'react'

const InfoItem = (props) => {
    return (
        <div className='info-item'>
            <div className='icon-holder'>
                <img src={props.icon} alt="icon"/>
            </div>
            <h6>{props.title}</h6>
            <p>{props.children}</p>
        </div>
    )
}

export default InfoItem;