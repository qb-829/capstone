
import React from 'react';
import "../components/About"
import Nav from './sub-components/Nav';

export default function About() {
    return (
        <div className="about-container">
            <img src="https://thumbs.dreamstime.com/b/music-learning-app-banner-listening-online-advertising-lettering-musicians-figures-instruments-symbols-header-colorful-vector-165304556.jpg" className="hero-image" alt="hero-image"/>
            <Nav />
            <h1>About Us</h1>
            <p>We are a team of developers and designers who are passionate about creating innovative and user-friendly applications. We strive to deliver the best possible experience to our users through careful planning, attention to detail, and a commitment to excellence.</p>
            <p>Our goal is to create applications that make a real difference in people's lives, whether it's through increasing productivity, improving communication, or just providing a little bit of entertainment.</p>
            <p>Thank you for choosing our application, we hope you enjoy using it as much as we enjoyed creating it.</p>
            <div className="card-container">
                <div className="card">
                    <img src="image1.jpg" alt="image1"/>
                    <p>Image 1 Description</p>
                </div>
                <div className="card">
                    <img src="image2.jpg" alt="image2"/>
                    <p>Image 2 Description</p>
                </div>
                <div className="card">
                    <img src="image3.jpg" alt="image3"/>
                    <p>Image 3</p>

              </div>
          </div>
        </div>
    )
}