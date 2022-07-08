import React from 'react'

export default function FeaturedAds() {
  return (
    <div>
        <section className="block">
                <div className="container">
                    <h2>Featured Ads</h2>
                    <div className="items grid grid-xl-3-items grid-lg-3-items grid-md-2-items">
                        <div className="item">
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
                        

                    </div>
                </div>
            </section>
    </div>
  )
}
