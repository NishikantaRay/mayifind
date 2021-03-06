import React from 'react'

export default function SubmitAds() {
  return (
    <div>
        <section class="content">
            <section class="block">
                <div class="container">
                    <section>
                        <div class="alert alert-warning" role="alert">
                            <h2 class="alert-heading">You don't have an account!</h2>
                            <p>You can submit only 1 ad at a time. To submit more, you need to
                                <a href="sign-in.html" class="link"><strong>Sign In</strong></a> or
                                <a href="register.html" class="link"><strong>Register</strong></a></p>
                        </div>
                    </section>
                    <form class="form form-submit">
                        <section>
                            <h2>Basic Information</h2>
                            <div class="form-group" id="type">
                                <label htmlFor="type" class="required">Type</label>
                                <figure>
                                    <label class="framed">
                                        <input type="radio" name="type" value="1" required/>
                                        Offer
                                    </label>
                                    <label class="framed">
                                        <input type="radio" name="type" value="2" required/>
                                        Demand
                                    </label>
                                </figure>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <label htmlFor="title" class="col-form-label required">Title</label>
                                        <input name="title" type="text" class="form-control" id="title" placeholder="Title" required/>
                                    </div>
                                    
                                </div>
                               
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label htmlFor="price" class="col-form-label required">Price</label>
                                        <input name="price" type="text" class="form-control" id="price" required/>
                                        <span class="input-group-addon">$</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label htmlFor="name" class="col-form-label required">Your Name</label>
                                        <input name="name" type="text" class="form-control" id="name" placeholder="Name" required/>
                                    </div>
                                    
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label htmlFor="email" class="col-form-label required">Your Email</label>
                                        <input name="email" type="email" class="form-control" id="email" placeholder="Email" required/>
                                    </div>
                                    
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label htmlFor="phone" class="col-form-label required">Your Phone</label>
                                        <input name="phone" type="text" class="form-control" id="phone" placeholder="Phone" required/>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </section>
                        
                        <section>
                            <div class="row">
                                <div class="col-md-4">
                                    <h2>Category</h2>
                                    <div class="form-group">
                                        <label htmlFor="submit-category" class="col-form-label">Category</label>
                                        <select class="change-tab" data-change-tab-target="category-tabs" name="submit_category" id="submit-category" data-placeholder="Select Category">
                                            <option value="">Select Category</option>
                                            <option value="computers">Computers</option>
                                            <option value="real_estate">Real Estate</option>
                                            <option value="cars_motorcycles">Cars & Motorcycles</option>
                                            <option value="furniture">Furniture</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                
                                <div class="col-md-8">
                                    <h2>Features</h2>
                                    <div class="form-slides" id="category-tabs">
                                        <div class="form-slide default">
                                            <h3>Please Select a Category</h3>
                                        </div>
                                        <div class="form-slide" id="computers">
                                            <h3>Computers</h3>
                                            <figure class="category-icon">
                                                <img src="assets/icons/computer.png" alt=""/>
                                            </figure>
                                           
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="computers___processor" class="col-form-label">Processor</label>
                                                        <select name="computers___processor" id="computers___processor" data-placeholder="Select Processor">
                                                            <option value="">Select Processor</option>
                                                            <option value="1">Intel Core i5</option>
                                                            <option value="2">Intel Core i7</option>
                                                            <option value="3">AMD FX-8300</option>
                                                            <option value="4">AMD Ryzen</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="computers___frequency" class="col-form-label">Frequency</label>
                                                        <input name="computers___frequency" type="text" class="form-control" id="computers___frequency"/>
                                                        <span class="input-group-addon">GHz</span>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="computers___cores" class="col-form-label">Cores</label>
                                                        <input name="computers___cores" type="text" class="form-control" id="computers___cores"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="computers___ram" class="col-form-label">RAM</label>
                                                        <input name="computers___ram" type="text" class="form-control" id="computers___ram"/>
                                                        <span class="input-group-addon">GB</span>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="computers___main_board" class="col-form-label">Main Board</label>
                                                        <input name="computers___main_board" type="text" class="form-control" id="computers___main_board"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="computers___os" class="col-form-label">OS</label>
                                                        <select name="computers___os" id="computers___os" data-placeholder="Select OS">
                                                            <option value="">Select OS</option>
                                                            <option value="1">Windows 10</option>
                                                            <option value="2">Windows 7</option>
                                                            <option value="3">Mac OS</option>
                                                            <option value="4">Linux</option>
                                                            <option value="5">No OS</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          
                                            <div class="form-group">
                                                <label htmlFor="computers___other_details" class="col-form-label">Other Details</label>
                                                <textarea name="computers___other_details" id="computers___other_details" class="form-control" rows="4"></textarea>
                                            </div>
                                            
                                        </div>
                                        

                                        <div class="form-slide" id="real_estate">
                                            <h3>Real Estate</h3>
                                            <figure class="category-icon">
                                                <img src="assets/icons/real-estate.png" alt=""/>
                                            </figure>
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label htmlFor="real_estate___type" class="col-form-label">Property Type</label>
                                                        <select name="real_estate___type" id="real_estate___type" data-placeholder="Property Type" >
                                                            <option value="">Property Type</option>
                                                            <option value="1">Apartment</option>
                                                            <option value="2">Condominium</option>
                                                            <option value="3">Cabin</option>
                                                            <option value="4">House</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label htmlFor="real_estate___status" class="col-form-label">Status</label>
                                                        <select name="real_estate___status" id="real_estate___status" data-placeholder="Status" >
                                                            <option value="">Status</option>
                                                            <option value="1">Sale</option>
                                                            <option value="2">Rent</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="real_estate___area" class="col-form-label">Area</label>
                                                        <input name="real_estate___area" type="text" class="form-control" id="real_estate___area"/>
                                                        <span class="input-group-addon">m<sup>2</sup></span>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="real_estate___bedrooms" class="col-form-label">Bedrooms</label>
                                                        <input name="real_estate___bedrooms" type="text" class="form-control" id="real_estate___bedrooms"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="real_estate___bathrooms" class="col-form-label">Bathrooms</label>
                                                        <input name="real_estate___bathrooms" type="text" class="form-control" id="real_estate___bathrooms"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          

                                            <h4>Property Features</h4>
                                            <ul class="list-unstyled columns-2">
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="real_estate___features[]" value="1"/>
                                                        Air conditioning
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="real_estate___features[]" value="2"/>
                                                        Heating
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="real_estate___features[]" value="3"/>
                                                        Terrace
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="real_estate___features[]" value="4"/>
                                                        Balcony
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="real_estate___features[]" value="5"/>
                                                        Garage
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="real_estate___features[]" value="6"/>
                                                        Central Heating
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="real_estate___features[]" value="7"/>
                                                        Laundry Room
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="checkbox" name="real_estate___features[]" value="8"/>
                                                        Alarm
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        

                                        <div class="form-slide" id="cars_motorcycles">
                                            <h3>Cars & Motorcycles</h3>
                                            <figure class="category-icon">
                                                <img src="assets/icons/car.png" alt=""/>
                                            </figure>
                                           
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label htmlFor="cars_motorcycles___type" class="col-form-label">Vehicle Type</label>
                                                        <select name="cars_motorcycles___type" id="cars_motorcycles___type" data-placeholder="Vehicle Type" >
                                                            <option value="">Vehicle Type</option>
                                                            <option value="1">Car</option>
                                                            <option value="2">Motorcycle</option>
                                                            <option value="3">Truck</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label htmlFor="cars_motorcycles___status" class="col-form-label">Status</label>
                                                        <select name="cars_motorcycles___status" id="cars_motorcycles___status" data-placeholder="Status" >
                                                            <option value="">Status</option>
                                                            <option value="1">New</option>
                                                            <option value="2">Used</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="cars_motorcycles___brand" class="col-form-label">Vehicle Type</label>
                                                        <select name="cars_motorcycles___brand" id="cars_motorcycles___brand" data-placeholder="Brand" >
                                                            <option value="">Brand</option>
                                                            <option value="1">Audi</option>
                                                            <option value="2">BWM</option>
                                                            <option value="3">GMC</option>
                                                            <option value="4">Ford</option>
                                                            <option value="5">Toyota</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="cars_motorcycles___model" class="col-form-label">Model</label>
                                                        <select name="cars_motorcycles___model" id="cars_motorcycles___model" data-placeholder="Model" >
                                                            <option value="">Model</option>
                                                            <option value="1">Focus</option>
                                                            <option value="2">Ranger</option>
                                                            <option value="3">Mustang</option>
                                                            <option value="4">Edge</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="cars_motorcycles___year" class="col-form-label">Year</label>
                                                        <input name="cars_motorcycles___year" type="text" class="form-control" id="cars_motorcycles___year"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          

                                        </div>
                                        

                                        <div class="form-slide" id="furniture">
                                            <h3>Furniture</h3>
                                            <figure class="category-icon">
                                                <img src="assets/icons/furniture.png" alt=""/>
                                            </figure>
                                            
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="furniture___type" class="col-form-label">Type</label>
                                                        <select name="furniture___type" id="furniture___type" data-placeholder="Type" >
                                                            <option value="">Type</option>
                                                            <option value="1">Bed</option>
                                                            <option value="2">Wardrobe</option>
                                                            <option value="3">Table</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="furniture___status" class="col-form-label">Status</label>
                                                        <select name="furniture___status" id="furniture___status" data-placeholder="Status" >
                                                            <option value="">Status</option>
                                                            <option value="1">New</option>
                                                            <option value="2">Used</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label htmlFor="furniture___material" class="col-form-label">Material</label>
                                                        <select name="furniture___material" id="furniture___material" data-placeholder="Material" >
                                                            <option value="">Material</option>
                                                            <option value="1">Wood</option>
                                                            <option value="2">Leather</option>
                                                            <option value="2">Metal</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          

                                            <h4>Size & Weigth</h4>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label htmlFor="furniture___length" class="col-form-label">Length</label>
                                                        <input name="furniture___length" type="text" class="form-control" id="furniture___length"/>
                                                        <span class="input-group-addon">mm</span>
                                                    </div>
                                                    
                                                </div>
                                               
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label htmlFor="furniture___width" class="col-form-label">Width</label>
                                                        <input name="furniture___width" type="text" class="form-control" id="furniture___width"/>
                                                        <span class="input-group-addon">mm</span>
                                                    </div>
                                                    
                                                </div>
                                               
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label htmlFor="furniture___height" class="col-form-label">Height</label>
                                                        <input name="furniture___height" type="text" class="form-control" id="furniture___height"/>
                                                        <span class="input-group-addon">mm</span>
                                                    </div>
                                                    
                                                </div>
                                               
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label htmlFor="furniture___weight" class="col-form-label">Weight</label>
                                                        <input name="furniture___weight" type="text" class="form-control" id="furniture___weight"/>
                                                        <span class="input-group-addon">kg</span>
                                                    </div>
                                                    
                                                </div>
                                               
                                            </div>
                                          
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                               
                            </div>
                          
                        </section>

                        <section>
                            <h2>Details</h2>
                            <div class="form-group">
                                <label htmlFor="details" class="col-form-label">Additional Details</label>
                                <textarea name="details" id="details" class="form-control" rows="4"></textarea>
                            </div>
                            
                        </section>

                        <section>
                            <h2>Location</h2>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label htmlFor="city" class="col-form-label required">City</label>
                                        <select name="city" id="city" data-placeholder="Select City" required>
                                            <option value="">City</option>
                                            <option value="1">London</option>
                                            <option value="2">New York</option>
                                            <option value="3">Paris</option>
                                            <option value="4">Moscow</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label htmlFor="district" class="col-form-label required">District</label>
                                        <select name="district" id="district" data-placeholder="Select District" required>
                                            <option value="">District</option>
                                            <option value="1">Manhattan</option>
                                            <option value="2">Brooklyn</option>
                                            <option value="3">Queens</option>
                                            <option value="4">The Bronx</option>
                                            <option value="5">Staten Island</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label htmlFor="street" class="col-form-label">Street</label>
                                        <input name="street" type="text" class="form-control" id="street"/>
                                    </div>
                                    
                                </div>
                                
                            </div>
                          
                            <div class="form-group">
                                <label htmlFor="input-location" class="col-form-label">Exact Location</label>
                                <input name="location" type="text" class="form-control" id="input-location" placeholder="Enter Location"/>
                                <span class="geo-location input-group-addon" data-toggle="tooltip" data-placement="top" title="Find My Position"><i class="fa fa-map-marker"></i></span>
                            </div>
                            
                            <label>Map</label>
                            <div class="map height-400px" id="map-submit"></div>
                            <input name="latitude" type="text" class="form-control" id="latitude" hidden/>
                            <input name="longitude" type="text" class="form-control" id="longitude" hidden/>
                        </section>

                        <section>
                            <h2>Gallery</h2>
                            <div class="file-upload-previews"></div>
                            <div class="file-upload">
                                <input type="file" name="files[]" class="file-upload-input with-preview" multiple title="Click to add files" maxlength="10" accept="gif|jpg|png"/>
                                <span><i class="fa fa-plus-circle"></i>Click or drag images here</span>
                            </div>
                        </section>

                        <section>
                            <h2>Additional Information</h2>
                            <h3>Opening Hours<span class="note">(optional)</span></h3>
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="accordion-heading-1">
                                        <h4 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#accordion-collapse-1" aria-expanded="false" aria-controls="accordion-collapse-1">
                                                <i class="fa fa-clock-o"></i>Add opening hours
                                            </a>
                                        </h4>
                                    </div>
                                    
                                    <div id="accordion-collapse-1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-1">
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-md-4 col-sm-4 horizontal-input-title">
                                                    <strong>Monday</strong>
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="open_hours[]" placeholder="Open"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="close_hours[]" placeholder="Close"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          
                                            <div class="row">
                                                <div class="col-md-4 col-sm-4 horizontal-input-title">
                                                    <strong>Tuesday</strong>
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="open_hours[]" placeholder="Open"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="close_hours[]" placeholder="Close"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          
                                            <div class="row">
                                                <div class="col-md-4 col-sm-4 horizontal-input-title">
                                                    <strong>Wednesday</strong>
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="open_hours[]" placeholder="Open"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="close_hours[]" placeholder="Close"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          
                                            <div class="row">
                                                <div class="col-md-4 col-sm-4 horizontal-input-title">
                                                    <strong>Thursday</strong>
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="open_hours[]" placeholder="Open"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="close_hours[]" placeholder="Close"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          
                                            <div class="row">
                                                <div class="col-md-4 col-sm-4 horizontal-input-title">
                                                    <strong>Friday</strong>
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="open_hours[]" placeholder="Open"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="close_hours[]" placeholder="Close"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          
                                            <div class="row">
                                                <div class="col-md-4 col-sm-4 horizontal-input-title">
                                                    <strong>Saturday</strong>
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="open_hours[]" placeholder="Open"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="close_hours[]" placeholder="Close"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          
                                            <div class="row">
                                                <div class="col-md-4 col-sm-4 horizontal-input-title">
                                                    <strong>Sunday</strong>
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="open_hours[]" placeholder="Open"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="close_hours[]" placeholder="Close"/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                          
                                        </div>
                                    </div>
                                   
                                </div>
                               
                            </div>
                            
                        </section>

                        <section class="clearfix">
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary large icon float-right">Preview<i class="fa fa-chevron-right"></i></button>
                            </div>
                        </section>
                    </form>
                    
                </div>
                
            </section>
            
        </section>
    </div>
  )
}
