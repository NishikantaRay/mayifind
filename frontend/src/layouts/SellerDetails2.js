import React from 'react'
import SideBarListingGrid from '../components/SideBarListingGrid'
import WriteAReview from '../components/WriteAReview'


export default function SellerDetails2() {
  return (
    <div>
        <section class="content">
            <section class="block">
                <section>
                    <div class="container">
                        <div class="author big">
                            <div class="author-image">
                                <div class="background-image">
                                    <img src="assets/img/author-09.jpg" alt=""/>
                                </div>
                            </div>
                            
                            <div class="author-description">
                                <div class="section-title">
                                    <h2>Judy Ivey</h2>
                                    <h4 class="location">
                                        <a href="/">Manhattan, NY</a>
                                    </h4>
                                    <figure>
                                        <div class="float-left">
                                            <div class="rating" data-rating="4"></div>
                                        </div>
                                        <div class="text-align-right social">
                                            <a href="/">
                                                <i class="fa fa-facebook-square"></i>
                                            </a>
                                            <a href="/">
                                                <i class="fa fa-twitter-square"></i>
                                            </a>
                                            <a href="/">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </div>
                                    </figure>
                                </div>
                                <div class="additional-info">
                                    <ul>
                                        <li>
                                            <figure>Phone</figure>
                                            <aside>+1 516-480-4273</aside>
                                        </li>
                                        <li>
                                            <figure>Email</figure>
                                            <aside><a href="/">hello@example.com</a></aside>
                                        </li>
                                        <li>
                                            <figure>Fax</figure>
                                            <aside>+1 123-84-6575</aside>
                                        </li>
                                    </ul>
                                </div>
                                
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu,
                                    sit amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.
                                </p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="background">
                        <div class="background-image original-size background-repeat-x">
                            <img src="assets/img/gradient-background.png" alt=""/>
                        </div>
                       
                    </div>
                    
                </section>
                <div class="container">
                    <div class="row flex-column-reverse flex-md-row">
                        <div class="col-md-9">
                            <section>
                                <h2>My Ads</h2>
                               
                                <div class="section-title clearfix">
                                    <div class="float-left float-xs-none">
                                        <label class="mr-3 align-text-bottom">Sort by: </label>
                                        <select name="sorting" id="sorting" class="small width-200px" data-placeholder="Default Sorting" >
                                            <option value="">Default Sorting</option>
                                            <option value="1">Newest First</option>
                                            <option value="2">Oldest First</option>
                                            <option value="3">Lowest Price First</option>
                                            <option value="4">Highest Price First</option>
                                        </select>

                                    </div>
                                    <div class="float-right float-xs-none d-xs-none thumbnail-toggle">
                                        <a href="/" class="change-class active" data-change-from-class="list compact" data-change-to-class="grid" data-parent-class="items">
                                            <i class="fa fa-th"></i>
                                        </a>
                                        <a href="/" class="change-class" data-change-from-class="grid" data-change-to-class="list compact" data-parent-class="items">
                                            <i class="fa fa-th-list"></i>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="read-more" data-read-more-link-more="Show More" data-read-more-link-less="Show Less">
                                    <div class="items grid grid-xl-3-items grid-lg-3-items grid-md-2-items">
                                        <div class="item">
                                            <div class="ribbon-featured">Featured</div>
                                            
                                            <div class="wrapper">
                                                <div class="image">
                                                    <h3>
                                                        <a href="/" class="tag category">Home & Decor</a>
                                                        <a href="single-listing-1.html" class="title">Furniture for sale</a>
                                                        <span class="tag">Offer</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" class="image-wrapper background-image">
                                                        <img src="assets/img/image-01.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                
                                                <h4 class="location">
                                                    <a href="/">Manhattan, NY</a>
                                                </h4>
                                                <div class="price">$80</div>
                                                <div class="meta">
                                                    <figure>
                                                        <i class="fa fa-calendar-o"></i>02.05.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i class="fa fa-user"></i>Jane Doe
                                                        </a>
                                                    </figure>
                                                </div>
                                                
                                                <div class="description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                                                </div>
                                                
                                                <a href="single-listing-1.html" class="detail text-caps underline">Detail</a>
                                            </div>
                                        </div>
                                        

                                        <div class="item">
                                            <div class="wrapper">
                                                <div class="image">
                                                    <h3>
                                                        <a href="/" class="tag category">Education</a>
                                                        <a href="single-listing-1.html" class="title">Creative Course</a>
                                                        <span class="tag">Offer</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" class="image-wrapper background-image">
                                                        <img src="assets/img/image-02.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                
                                                <h4 class="location">
                                                    <a href="/">Nashville, TN</a>
                                                </h4>
                                                <div class="price">$125</div>
                                                <div class="meta">
                                                    <figure>
                                                        <i class="fa fa-calendar-o"></i>28.04.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i class="fa fa-user"></i>Peter Browner
                                                        </a>
                                                    </figure>
                                                </div>
                                                
                                                <div class="description">
                                                    <p>Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus, eget suscipit tellus tincidunt sit amet. </p>
                                                </div>
                                                
                                                <div class="additional-info">
                                                    <ul>
                                                        <li>
                                                            <figure>Start Date</figure>
                                                            <aside>25.06.2017 09:00</aside>
                                                        </li>
                                                        <li>
                                                            <figure>Length</figure>
                                                            <aside>2 months</aside>
                                                        </li>
                                                        <li>
                                                            <figure>Bedrooms</figure>
                                                            <aside>3</aside>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <a href="single-listing-1.html" class="detail text-caps underline">Detail</a>
                                            </div>
                                        </div>
                                        

                                        <div class="item">
                                            <div class="wrapper">
                                                <div class="image">
                                                    <h3>
                                                        <a href="/" class="tag category">Adventure</a>
                                                        <a href="single-listing-1.html" class="title">Into The Wild</a>
                                                        <span class="tag">Ad</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" class="image-wrapper background-image">
                                                        <img src="assets/img/image-03.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                
                                                <h4 class="location">
                                                    <a href="/">Seattle, WA</a>
                                                </h4>
                                                <div class="price">$1,560</div>
                                                <div class="meta">
                                                    <figure>
                                                        <i class="fa fa-calendar-o"></i>21.04.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i class="fa fa-user"></i>Peak Agency
                                                        </a>
                                                    </figure>
                                                </div>
                                                
                                                <div class="description">
                                                    <p>Nam eget ullamcorper massa. Morbi fringilla lectus nec lorem tristique gravida</p>
                                                </div>
                                                
                                                <a href="single-listing-1.html" class="detail text-caps underline">Detail</a>
                                            </div>
                                        </div>
                                        

                                        <div class="item">
                                            <div class="wrapper">
                                                <div class="image">
                                                    <h3>
                                                        <a href="/" class="tag category">Real Estate</a>
                                                        <a href="single-listing-1.html" class="title">Luxury Apartment</a>
                                                        <span class="tag">Offer</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" class="image-wrapper background-image">
                                                        <img src="assets/img/image-04.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                
                                                <h4 class="location">
                                                    <a href="/">Greeley, CO</a>
                                                </h4>
                                                <div class="price">$75,000</div>
                                                <div class="meta">
                                                    <figure>
                                                        <i class="fa fa-calendar-o"></i>13.03.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i class="fa fa-user"></i>Hills Estate
                                                        </a>
                                                    </figure>
                                                </div>
                                                
                                                <div class="description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                                                </div>
                                                
                                                <div class="additional-info">
                                                    <ul>
                                                        <li>
                                                            <figure>Area</figure>
                                                            <aside>368m<sup>2</sup></aside>
                                                        </li>
                                                        <li>
                                                            <figure>Bathrooms</figure>
                                                            <aside>2</aside>
                                                        </li>
                                                        <li>
                                                            <figure>Bedrooms</figure>
                                                            <aside>3</aside>
                                                        </li>
                                                        <li>
                                                            <figure>Garage</figure>
                                                            <aside>1</aside>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <a href="single-listing-1.html" class="detail text-caps underline">Detail</a>
                                            </div>
                                        </div>
                                        

                                        <div class="item">
                                            <div class="wrapper">
                                                <div class="image">
                                                    <h3>
                                                        <a href="/" class="tag category">Architecture</a>
                                                        <a href="single-listing-1.html" class="title">We'll Redesign Your Apartment</a>
                                                        <span class="tag">Offer</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" class="image-wrapper background-image">
                                                        <img src="assets/img/image-05.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                
                                                <h4 class="location">
                                                    <a href="/">Greeley, CO</a>
                                                </h4>
                                                <div class="price">
                                                    <span class="appendix">From</span>
                                                    $200
                                                </div>
                                                <div class="meta">
                                                    <figure>
                                                        <i class="fa fa-calendar-o"></i>13.03.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i class="fa fa-user"></i>XL Designers
                                                        </a>
                                                    </figure>
                                                </div>
                                                
                                                <div class="description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                                                </div>
                                                
                                                <div class="additional-info">
                                                    <ul>
                                                        <li>
                                                            <figure>Area</figure>
                                                            <aside>368m<sup>2</sup></aside>
                                                        </li>
                                                        <li>
                                                            <figure>Bathrooms</figure>
                                                            <aside>2</aside>
                                                        </li>
                                                        <li>
                                                            <figure>Bedrooms</figure>
                                                            <aside>3</aside>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <a href="single-listing-1.html" class="detail text-caps underline">Detail</a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </section>
                            <section>
                                <WriteAReview/>
                            </section>
                            <section>
                                <h2>Reviews</h2>
                                <div class="comments items masonry grid-xl-3-items">
                                    <div class="comment item">
                                        <div class="author">
                                            <div class="author-description">
                                                <h3>Positive experience!</h3>
                                                <div class="meta">
                                                    <span class="rating" data-rating="4"></span>
                                                    <span>02.05.2017</span>
                                                </div>
                                                
                                                <p>
                                                    Nam pulvinar tortor nec lacinia efficitur. Integer erat tortor, ultricies
                                                    ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum, mollis
                                                    mauris id, scelerisque quam.
                                                </p>
                                            </div>
                                            
                                            <a href="/" class="author-image">
                                                <div class="background-image">
                                                    <img src="assets/img/author-09.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <h5>
                                                <a href="/">Jane Doe</a>
                                            </h5>
                                        </div>
                                        
                                    </div>
                                    

                                    <div class="comment item">
                                        <div class="author">
                                            <div class="author-description">
                                                <h3>Perfect seller. I am satisfied.</h3>
                                                <div class="meta">
                                                    <span class="rating" data-rating="5"></span>
                                                    <span>02.05.2017</span>
                                                </div>
                                                
                                                <p>
                                                    Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus.
                                                    Aenean nec turpis condimentum, mollis mauris id, scelerisque quam.
                                                </p>
                                                <p>
                                                    Nam pulvinar tortor nec lacinia efficitur. Integer erat tortor,
                                                    ultricies ut est vel, euismod
                                                </p>
                                            </div>
                                            
                                            <a href="/" class="author-image">
                                                <div class="background-image">
                                                    <img src="assets/img/author-05.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <h5>
                                                <a href="/">John Doe</a>
                                            </h5>
                                        </div>
                                        
                                    </div>
                                    

                                    <div class="comment item">
                                        <div class="author">
                                            <div class="author-description">
                                                <h3>Quick dispatch and good communication</h3>
                                                <div class="meta">
                                                    <span class="rating" data-rating="3"></span>
                                                    <span>02.05.2017</span>
                                                </div>
                                                
                                                <p>
                                                    Aenean nec turpis condimentum, mollis mauris id, scelerisque quam.
                                                </p>
                                            </div>
                                            
                                            <a href="/" class="author-image">
                                                <div class="background-image">
                                                    <img src="assets/img/user-default.png" alt=""/>
                                                </div>
                                            </a>
                                            <h5>
                                                <a href="/">John Doe</a>
                                            </h5>
                                        </div>
                                        
                                    </div>
                                    

                                    <div class="comment item">
                                        <div class="author">
                                            <div class="author-description">
                                                <h3>Grea product for sale and good prices</h3>
                                                <div class="meta">
                                                    <span class="rating" data-rating="5"></span>
                                                    <span>02.05.2017</span>
                                                </div>
                                                
                                                <p>
                                                    Integer erat tortor, ultricies
                                                    ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum, mollis
                                                    mauris id, scelerisque quam.
                                                </p>
                                            </div>
                                            
                                            <a href="/" class="author-image">
                                                <div class="background-image">
                                                    <img src="assets/img/author-02.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <h5>
                                                <a href="/">Jane Doe</a>
                                            </h5>
                                        </div>
                                        
                                    </div>
                                    

                                    <div class="comment item">
                                        <div class="author">
                                            <div class="author-description">
                                                <h3>Awesome stuff</h3>
                                                <div class="meta">
                                                    <span class="rating" data-rating="5"></span>
                                                    <span>02.05.2017</span>
                                                </div>
                                                
                                                <p>
                                                    Uultricies ut est vel, euismod imperdiet lacus.
                                                    Aenean nec turpis condimentum, mollis mauris id, scelerisque quam.
                                                </p>
                                                <p>
                                                    Nam pulvinar tortor nec lacinia efficitur. Integer erat tortor,
                                                    ultricies ut est vel, euismod
                                                </p>
                                            </div>
                                            
                                            <a href="/" class="author-image">
                                                <div class="background-image">
                                                    <img src="assets/img/author-03.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <h5>
                                                <a href="/">John Doe</a>
                                            </h5>
                                        </div>
                                        
                                    </div>
                                    

                                    <div class="comment item">
                                        <div class="author">
                                            <div class="author-description">
                                                <h3>I have nothing to compain</h3>
                                                <div class="meta">
                                                    <span class="rating" data-rating="4"></span>
                                                    <span>02.05.2017</span>
                                                </div>
                                                
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Nullam venenatis lobortis.
                                                </p>
                                            </div>
                                            
                                            <a href="/" class="author-image">
                                                <div class="background-image">
                                                    <img src="assets/img/author-08.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <h5>
                                                <a href="/">John Doe</a>
                                            </h5>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                

                                <div class="center">
                                    <a href="/" class="btn btn-primary btn-rounded btn-framed">Load More</a>
                                </div>
                            </section>
                        </div>
                        
                        <div class="col-md-3">
                        <SideBarListingGrid/>
                        </div>
                        
                    </div>
                </div>
               
            </section>
            
        </section>
    </div>
  )
}
