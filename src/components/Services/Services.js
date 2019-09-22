import React from 'react'

const Services = () => {
    return (
        <div className='services'>
            <div className='dark-overlay'>
                <ul className='main-list'>
                    <li className='main-list-item'>  
                        <div className='package package-yellow'>
                            <p>Pro Package</p>
                            <ul className='secondary-list'>
                                <li>Employee Profiles</li>
                                <li>HR Frontend</li>
                                <li>Ticket Based Support</li>
                                <li>Document Management</li>
                                <li>1 Hour Installation Support</li>
                                <div>
                                    <button className='yellow-btn'>Buy Now</button>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li className='main-list-item'> 
                        <div className='package package-pink'>
                            <p>Premium Package</p>
                            <ul className='secondary-list'>
                                <li>Everything in Pro</li>
                                <li>Custom Field Builder</li>
                                <li>Premium Support</li>
                                <li>SMS Notification</li>
                                <li>All Premium HRM Extensions</li>
                                <div>
                                    <button className='pink-btn'>Buy Now</button>
                                </div>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Services;