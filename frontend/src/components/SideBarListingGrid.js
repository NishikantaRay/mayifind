import React from 'react'

export default function SideBarListingGrid() {
  return (
    <div>
        <aside className="sidebar">
                                <section>
                                    <h2>Search Ads</h2>
                                    
                                    <form className="sidebar-form form">
                                        <div className="form-group">
                                            <label for="what" className="col-form-label">What?</label>
                                            <input name="keyword" type="text" className="form-control" id="what" placeholder="What are you looking for?"/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label for="input-location" className="col-form-label">Where?</label>
                                            <input name="location" type="text" className="form-control" id="input-location" placeholder="Enter Location"/>
                                            <span className="geo-location input-group-addon" data-toggle="tooltip" data-placement="top" title="Find My Position"><i className="fa fa-map-marker"></i></span>
                                        </div>
                                        
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
                                        
                                        <button type="submit" className="btn btn-primary width-100">Search</button>

                                        
                                        <div className="alternative-search-form">
                                            <a href="#collapseAlternativeSearchForm" className="icon" data-toggle="collapse"  aria-expanded="false" aria-controls="collapseAlternativeSearchForm"><i className="fa fa-plus"></i>More Options</a>
                                            <div className="collapse" id="collapseAlternativeSearchForm">
                                                <div className="wrapper">
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
                                                    <div className="form-group">
                                                        <input name="min_price" type="text" className="form-control small" id="min-price" placeholder="Minimal Price"/>
                                                        <span className="input-group-addon small">$</span>
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <input name="max_price" type="text" className="form-control small" id="max-price" placeholder="Maximal Price"/>
                                                        <span className="input-group-addon small">$</span>
                                                    </div>
                                                    
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
                                       
                                    </form>
                                    
                                </section>
                            </aside>
    </div>
  )
}
