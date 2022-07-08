import React from 'react'

export default function LatestAds() {
  return (
    <div>
        <section className="block">
                <div className="container">
                    <div className="box has-dark-background">
                        <div className="row align-items-center justify-content-center d-flex">
                            <div className="col-md-10 py-5">
                                <h2>Get the Latest Ads in Your Inbox</h2>
                                <form className="form email">
                                    <div className="form-row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="form-group">
                                                <label htmlFor="newsletter-category" className="col-form-label">Category?</label>
                                                <select name="newsletter-category" id="newsletter-category" data-placeholder="Select Category" >
                                                    <option value="">Select Category</option>
                                                    <option value="1">Computers</option>
                                                    <option value="2">Real Estate</option>
                                                    <option value="3">Cars & Motorcycles</option>
                                                    <option value="4">Furniture</option>
                                                    <option value="5">Pets & Animals</option>
                                                </select>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="col-md-7 col-sm-7">
                                            <div className="form-group">
                                                <label htmlFor="newsletter-email" className="col-form-label">Your Email</label>
                                                <input name="newsletter-email" type="email" className="form-control" id="newsletter-email" placeholder="Your Email"/>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="col-md-1 col-sm-1">
                                            <div className="form-group">
                                                <label className="invisible">.</label>
                                                <button type="submit" className="btn btn-primary width-100"><i className="fa fa-chevron-right"></i></button>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                        <div className="background">
                            <div className="background-image">
                                <img src="assets/img/hero-background-image-01.jpg" alt=""/>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
               
            </section>
           

            <section className="block">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-around">
                        <a href="/">
                            <img src="assets/img/partner-1.png" alt=""/>
                        </a>
                        <a href="/">
                            <img src="assets/img/partner-2.png" alt=""/>
                        </a>
                        <a href="/">
                            <img src="assets/img/partner-3.png" alt=""/>
                        </a>
                        <a href="/">
                            <img src="assets/img/partner-4.png" alt=""/>
                        </a>
                        {/* <a href="/">
                            <img src="assets/img/partner-5.png" alt=""/>
                        </a> */}
                    </div>
                </div>

            </section>

        
    </div>
  )
}
