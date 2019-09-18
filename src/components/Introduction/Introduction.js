import React from 'react'
import Navbar from '../layout/Navbar/Navbar';
import problemSolvingSvg from '../../assets/images/problem_solving.svg';

const Introduction = (props) => {
    return (
        <div className='intro'>
            <Navbar />
            <section>
                <img src={problemSolvingSvg} alt="Problem Solving" className='problem-solving-svg' />
                <div>
                    <p> <span>Best </span> Experience <span>Ever</span></p>
                    <button className='main-btn'>View</button>
                    <button className='main-btn'>Purchase</button>
                </div>
            </section>
        </div>
    )
}

export default Introduction;