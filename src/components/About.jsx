
import React from 'react';
import '../components/About'

export default function About() {
  return (
    <div>
      <div className="hero-image">
        {/* <img src="https://t4.ftcdn.net/jpg/01/27/16/25/360_F_127162573_kcES41FWV2OOdI5GxdD4di6l4O8o0AZb.jpg" alt="about us" /> */}
      </div>
      <div className="about-us-section">
        <h1 className='about-us-title'>About Us</h1>
        <p className='about-us-content'>
          We are a team of developers and designers who are passionate about
          creating innovative and user-friendly applications. We strive to
          deliver the best possible experience to our users through careful
          planning, attention to detail, and a commitment to excellence.
        </p>
        <p className='about-us-content'>
          Our goal is to create applications that make a real difference in
          people's lives, whether it's through increasing productivity,
          improving communication, or just providing a little bit of
          entertainment.
        </p>
        <p className='about-us-content'>
          Thank you for choosing our application, we hope you enjoy using it as
          much as we enjoyed creating it.
        </p>
        <div className="card-container">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://media.licdn.com/dms/image/D5635AQEr30nIjlV4pA/profile-framedphoto-shrink_200_200/0/1668436020719?e=1674525600&v=beta&t=VoaqSNiorQym4LzYpenP1W_488-cdatjtpSq7QyGsuI"
              className="card-img-top"
              alt="girl smiling headshot"
            />
            <div className="card-body">
              <h5 className="card-title">LaKeisha Waller</h5>
              <p className="card-text">
                  <ul class="no-bullet">
                    <li class='card-list'><a href="https://github.com/keishadw44">GitHub</a></li>
                    <li class='card-list'><a href="https://www.linkedin.com/in/lwaller-17667872/">LinkedIn</a></li>
                    <li class='card-list'><a href="mailto:webmaster@example.com">Email</a></li>
                  </ul>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://media.licdn.com/dms/image/D5603AQFKA666pl6vhA/profile-displayphoto-shrink_200_200/0/1668784970169?e=1679529600&v=beta&t=NFhF9mHomRDP8dfKnOleZF47d3Q4KWWUMIwfLAMYJls"
              alt="girl smiling"
            />
            <div className="card-body">
              <h5 className="card-title">T'Vedt Lazenby</h5>
              <p className="card-text">
                  <ul class="no-bullet">
                    <li class='card-list'><a href="https://github.com/10DownPro">GitHub</a></li>
                    <li class='card-list'><a href="https://github.com/10DownPro">LinkedIn</a></li>
                    <li class='card-list'><a href="mailto:tvedt@10downproductions.com">Email</a></li>
                  </ul>
              </p>
            </div>
          </div>
          
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://media.licdn.com/dms/image/C4E03AQEtlR0gETSgEg/profile-displayphoto-shrink_200_200/0/1642837988376?e=1679529600&v=beta&t=62cqqQJVONVdJxF80CFBP2YwkxbItSc9TymULEA6wew"
              alt="girl smiling"
            />
            <div className="card-body">
              <h5 className="card-title">Quyana Barrow</h5>
              <p className="card-text">
                  <ul class="no-bullet">
                    <li class='card-list'><a href="https://github.com/qb-829">GitHub</a></li>
                    <li class='card-list'><a href="https://www.linkedin.com/in/quyanabarrow/">LinkedIn</a></li>
                    <li class='card-list'><a href="mailto:qbarrow@gmail.com">Email</a></li>
                  </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

