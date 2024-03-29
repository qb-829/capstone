import React, { useState } from 'react';
import "./assets/styles/baselayout.css"

export default function Contact() {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
  });

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
  }

  

  return (
      // <!-- Contact-->
        <section class="page-section" id="contact">
            <div class="contact-container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact Me</h2>
                    <h3 class="section-subheading text-muted">Please feel free to reach out with questions or requests</h3>
                </div>
                {/* <!-- * * * * * * * * * * * * * * *-->
                <!-- * * SB Forms Contact Form * *-->
                <!-- * * * * * * * * * * * * * * *--> */}
                <div className='content-holder' id=' "content-holder'>
                <form  id="contactForm" action="https://submit-form.com/QiBqHSlS" method="POST">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                {/* <!-- Name input--> */}
                                <input class="form-control" id="name" type="text" placeholder="Your Name *" name="name" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-group">
                                {/* <!-- Email address input--> */}
                                <input class="form-control" id="email" type="email" placeholder="Your Email *" name="_replyto" data-sb-validations="required"/>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div class="form-group mb-md-0">
                                {/* <!-- Phone number input--> */}
                                <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" name="phone" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                {/* <!-- Message input--> */}
                                <textarea class="form-control" id="message" placeholder="Your Message *" name="message" data-sb-validations="required"></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful! Thank you for contacting me. I will contact you within 48 hrs</div>
                            
                        </div>
                    </div>
                    {/* <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    {/* <!-- Submit Button--> */}
                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
            </div>
        </section>
  )
}