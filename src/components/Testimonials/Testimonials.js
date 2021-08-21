import React, { Component } from 'react'
import human1 from '../../assets/images/1.jpg';
import human2 from '../../assets/images/2.jpg';
import human3 from '../../assets/images/3.jpg';
import human4 from '../../assets/images/4.jpg';

class Testimonials extends Component {

    state = {
        hover1: false,
        hover2: false,
        hover3: false,
        hover4: false
    }

    hover = (name) => {
        this.setState({[name]: true});
    }

    unhover = (name) => {
        this.setState({[name]: false});
    }

    render() {

        const names = {
            n1:'Osama Hafez',
            n2:'Ahmed Youssif',
            n3:'Sara Sami',
            n4:'Omar Hany'
        }

        const testimonials = {
            t1: '"The service is amazing and cheap."',
            t2: '"Very professional people."',
            t3: '"One of the best in the field."',
            t4: '"I recommend it to everybody."'
        }


        return (
            <div>
                <h1 className="testimonials-title">Our Awesome Clients</h1>
                <div className='testimonials'>
                    <div className='testimonials-holder'>
                        <img src={human1} alt="osama"/>
                        <div onMouseEnter={() => this.hover('hover1')} onMouseLeave={() => this.unhover('hover1')} className="test-section">
                            {this.state.hover1 ? testimonials.t1 : names.n1}
                        </div>
                    </div>
                    <div className='testimonials-holder'>
                        <img src={human2} alt="ahmed"/>
                        <div onMouseEnter={() => this.hover('hover2')} onMouseLeave={() => this.unhover('hover2')} className="test-section">
                            {this.state.hover2 ? testimonials.t2 : names.n2}
                        </div>
                    </div>
                    <div className='testimonials-holder'>
                        <img src={human3} alt="sara"/>
                        <div onMouseEnter={() => this.hover('hover3')} onMouseLeave={() => this.unhover('hover3')} className="test-section">
                            {this.state.hover3 ? testimonials.t3 : names.n3}
                        </div>
                    </div>
                    <div className='testimonials-holder'>
                        <img src={human4} alt="omar"/>
                        <div onMouseEnter={() => this.hover('hover4')} onMouseLeave={() => this.unhover('hover4')} className="test-section">
                            {this.state.hover4 ? testimonials.t4 : names.n4}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Testimonials;
