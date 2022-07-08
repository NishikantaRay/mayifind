import React from 'react'

export default function Navbar() {
  return (
    <div>
       <header class="hero">
            <div class="hero-wrapper">
               
                <div class="secondary-navigation">
                    <div class="container">
                        <ul class="left">
                            <li>
                            <span>
                                <i class="fa fa-phone"></i> +1 123 456 789
                            </span>
                            </li>
                        </ul>
                     
                        <ul class="right">
                            <li>
                                <a href="my-ads.html">
                                    <i class="fa fa-heart"></i>My Ads
                                </a>
                            </li>
                            <li>
                                <a href="sign-in.html">
                                    <i class="fa fa-sign-in"></i>Sign In
                                </a>
                            </li>
                            <li>
                                <a href="register.html">
                                    <i class="fa fa-pencil-square-o"></i>Register
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                 
                </div>
               
                <div class="main-navigation">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/img/logo.png" alt=""/>
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbar">
                               
                                <ul class="navbar-nav">
                                    <li class="nav-item active has-child">
                                        <a class="nav-link" href="/">Home</a>
                                        <ul class="child">
                                            <li class="nav-item">
                                                <a href="index.html" class="nav-link">Home 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-2.html" class="nav-link">Home 2</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-3.html" class="nav-link">Home 3</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="index-4.html" class="nav-link">Home 4</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item has-child">
                                        <a class="nav-link" href="/">Listing</a>
                                       
                                        <ul class="child">
                                            <li class="nav-item has-child">
                                                <a href="/" class="nav-link">Grid</a>
                                               
                                                <ul class="child">
                                                    <li class="nav-item">
                                                        <a href="listing-grid-full-width.html" class="nav-link">Full Width</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="listing-grid-sidebar.html" class="nav-link">With Sidebar</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="listing-grid-compact-sidebar.html" class="nav-link">Compact With Sidebar</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="listing-grid-compact-full-width.html" class="nav-link">Compact Full Width</a>
                                                    </li>
                                                </ul>
                                                
                                            </li>
                                            <li class="nav-item has-child">
                                                <a href="/" class="nav-link">List</a>
                                                
                                                <ul class="child">
                                                    <li class="nav-item">
                                                        <a href="listing-list-full-width.html" class="nav-link">Full Width</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="listing-list-sidebar.html" class="nav-link">With Sidebar</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="listing-list-compact-sidebar.html" class="nav-link">Compact With Sidebar</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="listing-list-compact-full-width.html" class="nav-link">Compact Full Width</a>
                                                    </li>
                                                </ul>
                                                
                                            </li>
                                            <li class="nav-item has-child">
                                                <a href="/" class="nav-link">Masonry</a>
                                                
                                                <ul class="child">
                                                    <li class="nav-item">
                                                        <a href="listing-masonry-full-width.html" class="nav-link">Full Width</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="listing-masonry-sidebar.html" class="nav-link">With Sidebar</a>
                                                    </li>
                                                </ul>
                                               
                                            </li>
                                            <li class="nav-item has-child">
                                                <a href="/" class="nav-link">Single</a>
                                             
                                                <ul class="child">
                                                    <li class="nav-item">
                                                        <a href="single-listing-1.html" class="nav-link">Single 1</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="single-listing-2.html" class="nav-link">Single 2</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="single-listing-3.html" class="nav-link">Single 3</a>
                                                    </li>
                                                </ul>
                                               
                                            </li>
                                        </ul>
                                    
                                    </li>
                                    <li class="nav-item has-child">
                                        <a class="nav-link" href="/">Pages</a>
                                      
                                        <ul class="child">
                                            <li class="nav-item">
                                                <a href="sellers.html" class="nav-link">Sellers</a>
                                            </li>
                                            <li class="nav-item has-child">
                                                <a href="/" class="nav-link">Seller Detail</a>
                                                
                                                <ul class="child">
                                                    <li class="nav-item">
                                                        <a href="seller-detail-1.html" class="nav-link">Seller Detail
                                                            1</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="seller-detail-2.html" class="nav-link">Seller Detail
                                                            2</a>
                                                    </li>
                                                </ul>
                                                
                                            </li>
                                            <li class="nav-item">
                                                <a href="blog.html" class="nav-link">Blog</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="blog-post.html" class="nav-link">Blog Post</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="submit.html" class="nav-link">Submit Ad</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="pricing.html" class="nav-link">Pricing</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="faq.html" class="nav-link">FAQ</a>
                                            </li>
                                        </ul>
                                   
                                    </li>
                                    <li class="nav-item has-child">
                                        <a class="nav-link" href="/">Extras</a>
                                        
                                        <ul class="child">
                                            <li class="nav-item has-child">
                                                <a href="/" class="nav-link">Grid Variants</a>
                                                <ul class="child">
                                                    <li class="nav-item">
                                                        <a href="listing-grid-4-items.html" class="nav-link">4 Items</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="listing-grid-3-items.html" class="nav-link">3 Items</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="listing-grid-2-items.html" class="nav-link">2 Items</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item has-child">
                                                <a href="/" class="nav-link">User Panel</a>
                                                <ul class="child">
                                                    <li class="nav-item">
                                                        <a href="my-profile.html" class="nav-link">My Profile</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="my-ads.html" class="nav-link">My Ads</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="change-password.html" class="nav-link">Change
                                                            Password</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="sign-in.html" class="nav-link">Sign In</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="register.html" class="nav-link">Register</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a href="elements.html" class="nav-link">Elements</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="typography.html" class="nav-link">Typography</a>
                                            </li>
                                            <li class="nav-item has-child">
                                                <a href="/" class="nav-link">Nested Navigation</a>
                                               
                                                <ul class="child">
                                                    <li class="nav-item">
                                                        <a href="/" class="nav-link">Level 2</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="/" class="nav-link">Level 2</a>
                                                    </li>
                                                    <li class="nav-item has-child">
                                                        <a href="/" class="nav-link">Level 2</a>
                                                        
                                                        <ul class="child">
                                                            <li class="nav-item has-child">
                                                                <a href="/" class="nav-link">Level 3</a>
                                                               
                                                                <ul class="child">
                                                                    <li class="nav-item">
                                                                        <a href="/" class="nav-link">Level 4</a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a href="/" class="nav-link">Level 4</a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a href="/" class="nav-link">Level 4</a>
                                                                    </li>
                                                                </ul>
                                                             
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="/" class="nav-link">Level 3</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="/" class="nav-link">Level 3</a>
                                                            </li>
                                                        </ul>
                                                        
                                                    </li>
                                                </ul>
                                                
                                            </li>
                                            <li class="nav-item">
                                                <a href="image-header.html" class="nav-link">Image Header</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="messaging.html" class="nav-link">Messages</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="submit.html" class="btn btn-primary text-caps btn-rounded btn-framed">Submit Ad</a>
                                    </li>
                                </ul>
                               
                            </div>
                            
                        </nav>
                       
                    </div>
                    
                </div>
               
                <div class="page-title">
                    <div class="container">
                        <h1 class="opacity-40 center">
                            <a href="/">Buy</a>, <a href="/">Sell</a> or <a href="/">Find</a> What You need
                        </h1>
                    </div>
                   
                </div>
                
                <form class="hero-form form">
                    <div class="container">
                        
                        <div class="main-search-form">
                            <div class="form-row">
                                <div class="col-md-3 col-sm-3">
                                    <div class="form-group">
                                        <label for="what" class="col-form-label">What?</label>
                                        <input name="keyword" type="text" class="form-control" id="what" placeholder="What are you looking for?"/>
                                    </div>
                                    
                                </div>
                                
                                <div class="col-md-3 col-sm-3">
                                    <div class="form-group">
                                        <label for="input-location" class="col-form-label">Where?</label>
                                        <input name="location" type="text" class="form-control" id="input-location" placeholder="Enter Location"/>
                                        <span class="geo-location input-group-addon" data-toggle="tooltip" data-placement="top" title="Find My Position"><i class="fa fa-map-marker"></i></span>
                                    </div>
                                    
                                </div>
                                
                                <div class="col-md-3 col-sm-3">
                                    <div class="form-group">
                                        <label for="category" class="col-form-label">Category?</label>
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
                              
                                <div class="col-md-3 col-sm-3">
                                    <button type="submit" class="btn btn-primary width-100">Search</button>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <div class="alternative-search-form">
                            <a href="#collapseAlternativeSearchForm" class="icon" data-toggle="collapse"  aria-expanded="false" aria-controls="collapseAlternativeSearchForm"><i class="fa fa-plus"></i>More Options</a>
                            <div class="collapse" id="collapseAlternativeSearchForm">
                                <div class="wrapper">
                                    <div class="form-row">
                                        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 d-xs-grid d-flex align-items-center justify-content-between">
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
                                        
                                        <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                            <div class="form-row">
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input name="min_price" type="text" class="form-control small" id="min-price" placeholder="Minimal Price"/>
                                                        <span class="input-group-addon small">$</span>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input name="max_price" type="text" class="form-control small" id="max-price" placeholder="Maximal Price"/>
                                                        <span class="input-group-addon small">$</span>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <select name="distance" id="distance" class="small" data-placeholder="Distance" >
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
                
                <div class="background">
                    <div class="background-image original-size">
                        <img src="assets/img/hero-background-icons.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </header> 
    </div>
  )
}
