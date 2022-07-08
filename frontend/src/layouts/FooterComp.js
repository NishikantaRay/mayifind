import React from 'react'

function FooterComp() {
  return (
    <>
        <footer className="footer">
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <a href="/" className="brand">
                                <img src="assets/img/logo.png" alt=""/>
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet
                                fermentum sem. className aptent taciti sociosqu ad litora torquent per conubia nostra.
                            </p>
                        </div>
                       
                        <div className="col-md-3">
                            <h2>Navigation</h2>
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <a href="/">Listing</a>
                                            </li>
                                            <li>
                                                <a href="/">Pages</a>
                                            </li>
                                            <li>
                                                <a href="/">Extras</a>
                                            </li>
                                            <li>
                                                <a href="/">Contact</a>
                                            </li>
                                            <li>
                                                <a href="/">Submit Ad</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="/">My Ads</a>
                                            </li>
                                            <li>
                                                <a href="/">Sign In</a>
                                            </li>
                                            <li>
                                                <a href="/">Register</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <h2>Contact</h2>
                            <address>
                                <figure>
                                    124 Abia Martin Drive<br/>
                                    New York, NY 10011
                                </figure>
                                <br/>
                                <strong>Email:</strong> <a href="/">hello@example.com</a>
                                <br/>
                                <strong>Skype: </strong> Craigs
                                <br/>
                                <br/>
                                <a href="contact.html" className="btn btn-primary text-caps btn-framed">Contact Us</a>
                            </address>
                        </div>
                        
                    </div>
                 
                </div>
                <div className="background">
                    <div className="background-image original-size">
                        <img src="assets/img/footer-background-icons.jpg" alt=""/>
                    </div>
                  
                </div>
               
            </div>
        </footer>
    </> 
  )
}

export default FooterComp;