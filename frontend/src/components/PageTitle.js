import React from 'react'

export default function PageTitle() {
  return (
    <div>
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
  )
}
