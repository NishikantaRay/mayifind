import React from 'react'

export default function Navbar2() {
  return (
    <div>
        <header className="hero has-dark-background">
            <div className="hero-wrapper">
               
                <div className="secondary-navigation">
                    <div className="container">
                        <ul className="left">
                            <li>
                            <span>
                                <i className="fa fa-phone"></i> +1 123 456 789
                            </span>
                            </li>
                        </ul>
                       
                        <ul className="right">
                            <li>
                                <a href="my-ads.html">
                                    <i className="fa fa-heart"></i>My Ads
                                </a>
                            </li>
                            <li>
                                <a href="sign-in.html">
                                    <i className="fa fa-sign-in"></i>Sign In
                                </a>
                            </li>
                            <li>
                                <a href="register.html">
                                    <i className="fa fa-pencil-square-o"></i>Register
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                 
                </div>
                
                <div className="main-navigation">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/img/logo-inverted.png" alt="" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbar">
                                
                                <ul className="navbar-nav">
                                    <li className="nav-item active has-child">
                                        <a className="nav-link" href="/">Home</a>
                                        <ul className="child">
                                            <li className="nav-item">
                                                <a href="index.html" className="nav-link">Home 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="index-2.html" className="nav-link">Home 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="index-3.html" className="nav-link">Home 3</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="index-4.html" className="nav-link">Home 4</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item has-child">
                                        <a className="nav-link" href="/">Listing</a>
                                        
                                        <ul className="child">
                                            <li className="nav-item has-child">
                                                <a href="/" className="nav-link">Grid</a>
                                                
                                                <ul className="child">
                                                    <li className="nav-item">
                                                        <a href="listing-grid-full-width.html" className="nav-link">Full Width</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="listing-grid-sidebar.html" className="nav-link">With Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="listing-grid-compact-sidebar.html" className="nav-link">Compact With Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="listing-grid-compact-full-width.html" className="nav-link">Compact Full Width</a>
                                                    </li>
                                                </ul>
                                               
                                            </li>
                                            <li className="nav-item has-child">
                                                <a href="/" className="nav-link">List</a>
                                                
                                                <ul className="child">
                                                    <li className="nav-item">
                                                        <a href="listing-list-full-width.html" className="nav-link">Full Width</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="listing-list-sidebar.html" className="nav-link">With Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="listing-list-compact-sidebar.html" className="nav-link">Compact With Sidebar</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="listing-list-compact-full-width.html" className="nav-link">Compact Full Width</a>
                                                    </li>
                                                </ul>
                                                
                                            </li>
                                            <li className="nav-item has-child">
                                                <a href="/" className="nav-link">Masonry</a>
                                                
                                                <ul className="child">
                                                    <li className="nav-item">
                                                        <a href="listing-masonry-full-width.html" className="nav-link">Full Width</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="listing-masonry-sidebar.html" className="nav-link">With Sidebar</a>
                                                    </li>
                                                </ul>
                                                
                                            </li>
                                            <li className="nav-item has-child">
                                                <a href="/" className="nav-link">Single</a>
                                                
                                                <ul className="child">
                                                    <li className="nav-item">
                                                        <a href="single-listing-1.html" className="nav-link">Single 1</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="single-listing-2.html" className="nav-link">Single 2</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="single-listing-3.html" className="nav-link">Single 3</a>
                                                    </li>
                                                </ul>
                                                
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    <li className="nav-item has-child">
                                        <a className="nav-link" href="/">Pages</a>
                                        
                                        <ul className="child">
                                            <li className="nav-item">
                                                <a href="sellers.html" className="nav-link">Sellers</a>
                                            </li>
                                            <li className="nav-item has-child">
                                                <a href="/" className="nav-link">Seller Detail</a>
                                                
                                                <ul className="child">
                                                    <li className="nav-item">
                                                        <a href="seller-detail-1.html" className="nav-link">Seller Detail
                                                            1</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="seller-detail-2.html" className="nav-link">Seller Detail
                                                            2</a>
                                                    </li>
                                                </ul>
                                                
                                            </li>
                                            <li className="nav-item">
                                                <a href="blog.html" className="nav-link">Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="blog-post.html" className="nav-link">Blog Post</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="submit.html" className="nav-link">Submit Ad</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pricing.html" className="nav-link">Pricing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="faq.html" className="nav-link">FAQ</a>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    <li className="nav-item has-child">
                                        <a className="nav-link" href="/">Extras</a>
                                        
                                        <ul className="child">
                                            <li className="nav-item has-child">
                                                <a href="/" className="nav-link">Grid Variants</a>
                                                <ul className="child">
                                                    <li className="nav-item">
                                                        <a href="listing-grid-4-items.html" className="nav-link">4 Items</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="listing-grid-3-items.html" className="nav-link">3 Items</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="listing-grid-2-items.html" className="nav-link">2 Items</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item has-child">
                                                <a href="/" className="nav-link">User Panel</a>
                                                <ul className="child">
                                                    <li className="nav-item">
                                                        <a href="my-profile.html" className="nav-link">My Profile</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="my-ads.html" className="nav-link">My Ads</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="change-password.html" className="nav-link">Change
                                                            Password</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="sign-in.html" className="nav-link">Sign In</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="register.html" className="nav-link">Register</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="elements.html" className="nav-link">Elements</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="typography.html" className="nav-link">Typography</a>
                                            </li>
                                            <li className="nav-item has-child">
                                                <a href="/" className="nav-link">Nested Navigation</a>
                                               
                                                <ul className="child">
                                                    <li className="nav-item">
                                                        <a href="/" className="nav-link">Level 2</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="/" className="nav-link">Level 2</a>
                                                    </li>
                                                    <li className="nav-item has-child">
                                                        <a href="/" className="nav-link">Level 2</a>
                                                     
                                                        <ul className="child">
                                                            <li className="nav-item has-child">
                                                                <a href="/" className="nav-link">Level 3</a>
                                                                
                                                                <ul className="child">
                                                                    <li className="nav-item">
                                                                        <a href="/" className="nav-link">Level 4</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a href="/" className="nav-link">Level 4</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a href="/" className="nav-link">Level 4</a>
                                                                    </li>
                                                                </ul>
                                                                
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="/" className="nav-link">Level 3</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="/" className="nav-link">Level 3</a>
                                                            </li>
                                                        </ul>
                                                       
                                                    </li>
                                                </ul>
                                               
                                            </li>
                                            <li className="nav-item">
                                                <a href="image-header.html" className="nav-link">Image Header</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="messaging.html" className="nav-link">Messages</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="submit.html" className="btn btn-primary text-caps btn-rounded btn-framed">Submit Ad</a>
                                    </li>
                                </ul>
                             
                            </div>
                            
                        </nav>
                        
                    </div>
                 
                </div>
                
                <div className="page-title">
                    <div className="container">
                        <h1 className="center">
                            <a href="/">Buy</a>, <a href="/">Sell</a> or <a href="/">Find</a> What You need
                        </h1>
                    </div>
                 
                </div>
               
                <form className="hero-form form">
                    <div className="container">
                        
                        <div className="main-search-form">
                            <div className="form-row">
                                <div className="col-md-3 col-sm-3">
                                    <div className="form-group">
                                        <label for="what" className="col-form-label">What?</label>
                                        <input name="keyword" type="text" className="form-control" id="what" placeholder="What are you looking for?"/>
                                    </div>
                                    
                                </div>
                               
                                <div className="col-md-3 col-sm-3">
                                    <div className="form-group">
                                        <label for="input-location" className="col-form-label">Where?</label>
                                        <input name="location" type="text" className="form-control" id="input-location" placeholder="Enter Location"/>
                                        <span className="geo-location input-group-addon" data-toggle="tooltip" data-placement="top" title="Find My Position"><i className="fa fa-map-marker"></i></span>
                                    </div>
                                    
                                </div>
                               
                                <div className="col-md-3 col-sm-3">
                                    <div className="form-group">
                                        <label for="category" className="col-form-label">Category?</label>
                                        <select name="category" id="category" data-placeholder="Select Category">
                                            <option value="">Select Category</option>
                                            <option value="1">Computers</option>
                                            <option value="2">Real Estate</option>
                                            <option value="3">Cars & Motorcycles</option>
                                            <option value="4">Furniture</option>
                                            <option value="5">Pets & Animals</option>
                                        </select>
                                    </div>
                                    
                                </div>
                               
                                <div className="col-md-3 col-sm-3">
                                    <button type="submit" className="btn btn-primary width-100">Search</button>
                                </div>
                               
                            </div>
                            
                        </div>
                        
                       
                        <div className="alternative-search-form">
                            <a href="#collapseAlternativeSearchForm" className="icon" data-toggle="collapse"  aria-expanded="false" aria-controls="collapseAlternativeSearchForm"><i className="fa fa-plus"></i>More Options</a>
                            <div className="collapse" id="collapseAlternativeSearchForm">
                                <div className="wrapper">
                                    <div className="form-row">
                                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 d-xs-grid d-flex align-items-center justify-content-between">
                                            <label>
                                                <input type="checkbox" name="new"/>
                                                New
                                            </label>
                                            <label>
                                                <input type="checkbox" name="used"/>
                                                Used
                                            </label>
                                            <label>
                                                <input type="checkbox" name="with_photo"/>
                                                With Photo
                                            </label>
                                            <label>
                                                <input type="checkbox" name="featured"/>
                                                Featured
                                            </label>
                                        </div>
                                        
                                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-row">
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="form-group">
                                                        <input name="min_price" type="text" className="form-control small" id="min-price" placeholder="Minimal Price"/>
                                                        <span className="input-group-addon small">$</span>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="form-group">
                                                        <input name="max_price" type="text" className="form-control small" id="max-price" placeholder="Maximal Price"/>
                                                        <span className="input-group-addon small">$</span>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div className="col-md-4 col-sm-4">
                                                    <div className="form-group">
                                                        <select name="distance" id="distance" className="small" data-placeholder="Distance" >
                                                            <option value="">Distance</option>
                                                            <option value="1">1km</option>
                                                            <option value="2">5km</option>
                                                            <option value="3">10km</option>
                                                            <option value="4">50km</option>
                                                            <option value="5">100km</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                               
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                 
                </form>
                
                <div className="background">
                    <div className="background-image">
                        <img src="assets/img/hero-background-image-01.jpg" alt="" />
                    </div>
                    
                </div>
                
            </div>
            
        </header>
    </div>
  )
}
