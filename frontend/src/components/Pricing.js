import React from 'react'

export default function Pricing() {
  return (
    <div>
        <section className="content">
            <section className="block">
                <div className="container">

                    <section>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-lg-3">
                                <div className="pricing box description">
                                    <h2 className="opacity-30">Package</h2>
                                    <ul>
                                        <li>Email Support</li>
                                        <li>Phone Support</li>
                                        <li>Documentation</li>
                                        <li>Consultation Hours</li>
                                        <li>Profile Builder</li>
                                    </ul>
                                </div>
                                
                            </div>
                            
                            <div className="col-md-6 col-sm-6 col-lg-3">
                                <div className="pricing box">
                                    <h2>Silver</h2>
                                    <figure>$9.90</figure>
                                    <ul>
                                        <li className="available"><i className="fa fa-check"></i></li>
                                        <li className="available"><i className="fa fa-check"></i></li>
                                        <li className="not-available"><i className="fa fa-times"></i></li>
                                        <li>3 hours</li>
                                        <li className="not-available"><i className="fa fa-times"></i></li>
                                    </ul>
                                    <a href="/" className="btn btn-primary btn-rounded">Select</a>
                                </div>
                               
                            </div>
                            
                            <div className="col-md-6 col-sm-6 col-lg-3">
                                <div className="pricing box featured">
                                    <h2>Gold</h2>
                                    <figure>$19.90</figure>
                                    <ul>
                                        <li className="available"><i className="fa fa-check"></i></li>
                                        <li className="available"><i className="fa fa-check"></i></li>
                                        <li className="available"><i className="fa fa-check"></i></li>
                                        <li>3 hours</li>
                                        <li className="not-available"><i className="fa fa-times"></i></li>
                                    </ul>
                                    <a href="/" className="btn btn-primary btn-rounded">Select</a>
                                </div>
                                
                            </div>
                            
                            <div className="col-md-6 col-sm-6 col-lg-3">
                                <div className="pricing box">
                                    <h2>Platinum</h2>
                                    <figure>$29.90</figure>
                                    <ul>
                                        <li className="available"><i className="fa fa-check"></i></li>
                                        <li className="available"><i className="fa fa-check"></i></li>
                                        <li className="not-available"><i className="fa fa-check"></i></li>
                                        <li>3 hours</li>
                                        <li className="available"><i className="fa fa-check"></i></li>
                                    </ul>
                                    <a href="/" className="btn btn-primary btn-rounded">Select</a>
                                </div>
                                
                            </div>
                            
                        </div>
                    </section>

                </div>
               
            </section>
            
        </section>
    </div>
  )
}
