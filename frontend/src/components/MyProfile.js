import React from 'react'

export default function MyProfile() {
  return (
    <div>
        <section className="content">
            <section className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <nav className="nav flex-column side-nav">
                                <a className="nav-link active icon" href="my-profile.html">
                                    <i className="fa fa-user"></i>My Profile
                                </a>
                                <a className="nav-link icon" href="my-ads.html">
                                    <i className="fa fa-heart"></i>My Ads Listing
                                </a>
                                <a className="nav-link icon" href="bookmarks.html">
                                    <i className="fa fa-star"></i>Bookmarks
                                </a>
                                <a className="nav-link icon" href="change-password.html">
                                    <i className="fa fa-recycle"></i>Change Password
                                </a>
                                <a className="nav-link icon" href="sold-items.html">
                                    <i className="fa fa-check"></i>Sold Items
                                </a>
                            </nav>
                        </div>
                        
                        <div className="col-md-9">
                            <form className="form">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h2>Personal Information</h2>
                                        <section>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="title" className="col-form-label">Title</label>
                                                        <select name="title" id="title" data-placeholder="Title">
                                                            <option value="">Title</option>
                                                            <option value="1" selected>Mrs</option>
                                                            <option value="2">Mr</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label htmlFor="name" className="col-form-label required">Your Name</label>
                                                        <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" value="Jane Doe" required/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="location" className="col-form-label required">Your Location</label>
                                                <input name="location" type="text" className="form-control" id="input-location2" placeholder="Your Location" value="Manhattan, NY" required/>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="about" className="col-form-label">More About You</label>
                                                <textarea name="about" id="about" className="form-control" rows="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</textarea>
                                            </div>
                                            
                                        </section>

                                        <section>
                                            <h2>Contact</h2>
                                            <div className="form-group">
                                                <label htmlFor="phone" className="col-form-label">Phone</label>
                                                <input name="phone" type="text" className="form-control" id="phone" placeholder="Your Phone" value="312-238-3329"/>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="email" className="col-form-label">Email</label>
                                                <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" value="jane.doe@example.com"/>
                                            </div>
                                            
                                        </section>

                                        <section>
                                            <h2>Social</h2>
                                            <div className="form-group">
                                                <label htmlFor="twitter" className="col-form-label">Twitter</label>
                                                <input name="twitter" type="text" className="form-control" id="twitter" placeholder="http://" value="http://www.twitter.com/jane.doe"/>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="facebook" className="col-form-label">Facebook</label>
                                                <input name="facebook" type="text" className="form-control" id="facebook" placeholder="http://" value="http://www.facebook.com/jane.doe"/>
                                            </div>
                                            
                                        </section>

                                        <section className="clearfix">
                                            <button type="submit" className="btn btn-primary float-right">Save Changes</button>
                                        </section>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <div className="profile-image">
                                            <div className="image background-image">
                                                <img src="assets/img/author-09.jpg" alt=""/>
                                            </div>
                                            <div className="single-file-input">
                                                <input type="file" id="user_image" name="user_image"/>
                                                <div className="btn btn-framed btn-primary small">Upload a picture</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </section>
            
        </section>
    </div>
  )
}
