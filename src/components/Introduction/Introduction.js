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
            <div className="blob">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F2F4F841" d="M41.4,-44C56.5,-36.7,73.4,-26.3,76.1,-13.1C78.8,0.1,67.3,16.1,56.2,29.8C45.1,43.4,34.5,54.6,20.6,62C6.6,69.5,-10.7,73.1,-23,67C-35.2,60.8,-42.5,44.8,-50.1,29.8C-57.7,14.9,-65.6,1,-67.9,-16.5C-70.3,-34,-67.1,-55.1,-54.8,-62.9C-42.6,-70.7,-21.3,-65.1,-4.1,-60.3C13.2,-55.5,26.4,-51.3,41.4,-44Z" transform="translate(100 100)" />
                </svg>
            </div>
        </div>
    )
}

export default Introduction;