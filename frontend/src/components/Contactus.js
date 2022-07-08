import React from 'react'

export default function Contactus() {
  return (
    <div>
       <section className="content">
            <section className="block">
                {/* <div className="map height-500px" id="map-contact"></div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Get In Touch</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                amet fermentum sem. className aptent taciti sociosqu ad litora
                            </p>
                            <br/>
                            <figure className="with-icon">
                                <i className="fa fa-map-marker"></i>
                                <span>2519 Stanley Avenue<br/>Huntington, NY 11743 </span>
                            </figure>
                            <br/>
                            <figure className="with-icon">
                                <i className="fa fa-phone"></i>
                                <span>+1 516-480-4273</span>
                            </figure>
                            <figure className="with-icon">
                                <i className="fa fa-envelope"></i>
                                <a href="/">hello@example.com</a>
                            </figure>
                            <figure className="with-icon">
                                <i className="fa fa-envelope"></i>
                                <a href="/">support@example.com</a>
                            </figure>
                        </div>
                        
                        <div className="col-md-8">
                            <h2>Contact Form</h2>
                            <form className="form email">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="name" className="col-form-label required">Your Name</label>
                                            <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required/>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email" className="col-form-label required">Your Email</label>
                                            <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required/>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                <div className="form-group">
                                    <label for="subject" className="col-form-label">Subject</label>
                                    <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject"/>
                                </div>
                                
                                <div className="form-group">
                                    <label for="message" className="col-form-label required">Your Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-primary float-right">Send Message</button>
                            </form>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </section>
            
        </section> 
    </div>
  )
}
