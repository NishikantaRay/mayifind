import React from 'react'
import SideBarListingGrid from '../components/SideBarListingGrid'
import WriteAReview from '../components/WriteAReview'

export default function SellerDetails1() {
  return (
    <div>
        <section className="content">
            <section className="block">
                <div className="container">
                    <div className="row flex-column-reverse flex-md-row">
                        <div className="col-md-9">
                            <section className="my-0">
                                <div className="author big">
                                    <div className="author-image">
                                        <div className="background-image">
                                            <img src="assets/img/author-09.jpg" alt=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="author-description">
                                        <div className="section-title">
                                            <h2>Judy Ivey</h2>
                                            <h4 className="location">
                                                <a href="/">Manhattan, NY</a>
                                            </h4>
                                            <figure>
                                                <div className="float-left">
                                                    <div className="rating" data-rating="4"></div>
                                                </div>
                                                <div className="text-align-right social">
                                                    <a href="/">
                                                        <i className="fa fa-facebook-square"></i>
                                                    </a>
                                                    <a href="/">
                                                        <i className="fa fa-twitter-square"></i>
                                                    </a>
                                                    <a href="/">
                                                        <i className="fa fa-instagram"></i>
                                                    </a>
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="additional-info">
                                            <ul>
                                                <li>
                                                    <figure>Phone</figure>
                                                    <aside>+1 516-480-4273</aside>
                                                </li>
                                                <li>
                                                    <figure>Email</figure>
                                                    <aside><a href="/">hello@example.com</a></aside>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu,
                                            sit amet fermentum sem. className aptent taciti sociosqu ad litora torquent per
                                            conubia nostra, per inceptos himenaeos.
                                        </p>
                                    </div>
                                    
                                </div>
                                
                            </section>

                            <hr/>

                            <section>
                                <h2>My Ads</h2>
                                
                                <div className="section-title clearfix">
                                    <div className="float-left float-xs-none">
                                        <label className="mr-3 align-text-bottom">Sort by: </label>
                                        <select name="sorting" id="sorting" className="small width-200px" data-placeholder="Default Sorting" >
                                            <option value="">Default Sorting</option>
                                            <option value="1">Newest First</option>
                                            <option value="2">Oldest First</option>
                                            <option value="3">Lowest Price First</option>
                                            <option value="4">Highest Price First</option>
                                        </select>

                                    </div>
                                    <div className="float-right float-xs-none d-xs-none thumbnail-toggle">
                                        <a href="/" className="change-className active" data-change-from-className="list compact" data-change-to-className="grid" data-parent-className="items">
                                            <i className="fa fa-th"></i>
                                        </a>
                                        <a href="/" className="change-className" data-change-from-className="grid" data-change-to-className="list compact" data-parent-className="items">
                                            <i className="fa fa-th-list"></i>
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="read-more" data-read-more-link-more="Show More" data-read-more-link-less="Show Less">
                                    <div className="items grid grid-xl-3-items grid-lg-3-items grid-md-2-items">
                                        <div className="item">
                                            <div className="ribbon-featured">Featured</div>
                                           
                                            <div className="wrapper">
                                                <div className="image">
                                                    <h3>
                                                        <a href="/" className="tag category">Home & Decor</a>
                                                        <a href="single-listing-1.html" className="title">Furniture for sale</a>
                                                        <span className="tag">Offer</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                                        <img src="assets/img/image-01.jpg" alt=""/>
                                                    </a>
                                                </div>
                                               
                                                <h4 className="location">
                                                    <a href="/">Manhattan, NY</a>
                                                </h4>
                                                <div className="price">$80</div>
                                                <div className="meta">
                                                    <figure>
                                                        <i className="fa fa-calendar-o"></i>02.05.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i className="fa fa-user"></i>Jane Doe
                                                        </a>
                                                    </figure>
                                                </div>
                                               
                                                <div className="description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                                                </div>
                                                
                                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                                            </div>
                                        </div>
                                        

                                        <div className="item">
                                            <div className="wrapper">
                                                <div className="image">
                                                    <h3>
                                                        <a href="/" className="tag category">Education</a>
                                                        <a href="single-listing-1.html" className="title">Creative Course</a>
                                                        <span className="tag">Offer</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                                        <img src="assets/img/image-02.jpg" alt=""/>
                                                    </a>
                                                </div>
                                               
                                                <h4 className="location">
                                                    <a href="/">Nashville, TN</a>
                                                </h4>
                                                <div className="price">$125</div>
                                                <div className="meta">
                                                    <figure>
                                                        <i className="fa fa-calendar-o"></i>28.04.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i className="fa fa-user"></i>Peter Browner
                                                        </a>
                                                    </figure>
                                                </div>
                                               
                                                <div className="description">
                                                    <p>Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus, eget suscipit tellus tincidunt sit amet. </p>
                                                </div>
                                                
                                                <div className="additional-info">
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
                                                
                                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                                            </div>
                                        </div>
                                        

                                        <div className="item">
                                            <div className="wrapper">
                                                <div className="image">
                                                    <h3>
                                                        <a href="/" className="tag category">Adventure</a>
                                                        <a href="single-listing-1.html" className="title">Into The Wild</a>
                                                        <span className="tag">Ad</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                                        <img src="assets/img/image-03.jpg" alt=""/>
                                                    </a>
                                                </div>
                                               
                                                <h4 className="location">
                                                    <a href="/">Seattle, WA</a>
                                                </h4>
                                                <div className="price">$1,560</div>
                                                <div className="meta">
                                                    <figure>
                                                        <i className="fa fa-calendar-o"></i>21.04.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i className="fa fa-user"></i>Peak Agency
                                                        </a>
                                                    </figure>
                                                </div>
                                               
                                                <div className="description">
                                                    <p>Nam eget ullamcorper massa. Morbi fringilla lectus nec lorem tristique gravida</p>
                                                </div>
                                                
                                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                                            </div>
                                        </div>
                                        

                                        <div className="item">
                                            <div className="wrapper">
                                                <div className="image">
                                                    <h3>
                                                        <a href="/" className="tag category">Real Estate</a>
                                                        <a href="single-listing-1.html" className="title">Luxury Apartment</a>
                                                        <span className="tag">Offer</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                                        <img src="assets/img/image-04.jpg" alt=""/>
                                                    </a>
                                                </div>
                                               
                                                <h4 className="location">
                                                    <a href="/">Greeley, CO</a>
                                                </h4>
                                                <div className="price">$75,000</div>
                                                <div className="meta">
                                                    <figure>
                                                        <i className="fa fa-calendar-o"></i>13.03.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i className="fa fa-user"></i>Hills Estate
                                                        </a>
                                                    </figure>
                                                </div>
                                               
                                                <div className="description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                                                </div>
                                                
                                                <div className="additional-info">
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
                                                
                                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                                            </div>
                                        </div>
                                        

                                        <div className="item">
                                            <div className="wrapper">
                                                <div className="image">
                                                    <h3>
                                                        <a href="/" className="tag category">Architecture</a>
                                                        <a href="single-listing-1.html" className="title">We'll Redesign Your Apartment</a>
                                                        <span className="tag">Offer</span>
                                                    </h3>
                                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                                        <img src="assets/img/image-05.jpg" alt=""/>
                                                    </a>
                                                </div>
                                               
                                                <h4 className="location">
                                                    <a href="/">Greeley, CO</a>
                                                </h4>
                                                <div className="price">
                                                    <span className="appendix">From</span>
                                                    $200
                                                </div>
                                                <div className="meta">
                                                    <figure>
                                                        <i className="fa fa-calendar-o"></i>13.03.2017
                                                    </figure>
                                                    <figure>
                                                        <a href="/">
                                                            <i className="fa fa-user"></i>XL Designers
                                                        </a>
                                                    </figure>
                                                </div>
                                               
                                                <div className="description">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                                                </div>
                                                
                                                <div className="additional-info">
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
                                                
                                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
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
                                <div className="comments">
                                    <div className="comment">
                                        <div className="author">
                                            <a href="/" className="author-image">
                                                <div className="background-image">
                                                    <img src="assets/img/author-09.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <div className="author-description">
                                                <h3>Positive experience!</h3>
                                                <div className="meta">
                                                    <span className="rating" data-rating="4"></span>
                                                    <span>02.05.2017</span>
                                                    <h5><a href="/">Jane Doe</a></h5>
                                                </div>
                                               
                                                <p>
                                                    Nam pulvinar tortor nec lacinia efficitur. Integer erat tortor, ultricies
                                                    ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum, mollis
                                                    mauris id, scelerisque quam.
                                                </p>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    

                                    <div className="comment">
                                        <div className="author">
                                            <a href="/" className="author-image">
                                                <div className="background-image">
                                                    <img src="assets/img/author-05.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <div className="author-description">
                                                <h3>Perfect seller. I am satisfied.</h3>
                                                <div className="meta">
                                                    <span className="rating" data-rating="5"></span>
                                                    <span>02.05.2017</span>
                                                    <h5><a href="/">John Doe</a></h5>
                                                </div>
                                               
                                                <p>
                                                    Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus.
                                                    Aenean nec turpis condimentum, mollis mauris id, scelerisque quam.
                                                </p>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    

                                    <div className="comment">
                                        <div className="author">
                                            <a href="/" className="author-image">
                                                <div className="background-image">
                                                    <img src="assets/img/author-04.jpg" alt=""/>
                                                </div>
                                            </a>
                                            <div className="author-description">
                                                <h3>Quick dispatch and good communication</h3>
                                                <div className="meta">
                                                    <span className="rating" data-rating="3"></span>
                                                    <span>02.05.2017</span>
                                                    <h5><a href="/">Susan Jefferson</a></h5>
                                                </div>
                                               
                                                <p>
                                                    Cras luctus aliquet fringilla. In eu cursus nunc. Quisque dolor leo,
                                                    vehicula a sem ut, aliquam pretium tellus. Morbi ut mi eleifend,
                                                    sollicitudin nisl in, elementum nisi. Praesent sed libero euismod,
                                                    pellentesque risus sit amet, faucibus lorem. Pellentesque bibendum
                                                    libero sed tempor tristique.
                                                </p>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                <div className="center">
                                    <a href="/" className="btn btn-primary btn-rounded btn-framed">Load More</a>
                                </div>
                            </section>
                        </div>
                       
                        <div className="col-md-3">
                           
                            <SideBarListingGrid></SideBarListingGrid>
                        </div>
                        
                    </div>
                </div>
                
            </section>
            
        </section>
    </div>
  )
}
