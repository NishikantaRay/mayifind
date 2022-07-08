import React from "react";

export default function RecentListing1() {
  return (
    <div>
      <section className="content">
        <section className="block">
          <div className="container">
            <div className="section-title clearfix">
              <div className="float-xl-left float-md-left float-sm-none">
                <h2>Recent Listings</h2>
              </div>
              <div className="float-xl-right float-md-right float-sm-none">
                <select
                  name="categories"
                  id="categories"
                  className="small width-200px"
                  data-placeholder="Category"
                >
                  <option value="">Category</option>
                  <option value="1">Computers</option>
                  <option value="2">Real Estate</option>
                  <option value="3">Cars & Motorcycles</option>
                  <option value="4">Furniture</option>
                  <option value="5">Pets & Animals</option>
                </select>
                <select
                  name="sorting"
                  id="sorting"
                  className="small width-200px"
                  data-placeholder="Default Sorting"
                >
                  <option value="">Default Sorting</option>
                  <option value="1">Newest First</option>
                  <option value="2">Oldest First</option>
                  <option value="3">Lowest Price First</option>
                  <option value="4">Highest Price First</option>
                </select>
              </div>
            </div>

            <div className="items masonry grid-xl-4-items grid-lg-3-items grid-md-2-items">
              <div className="item">
                <div className="ribbon-featured">Featured</div>

                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Home & Decor
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Furniture for sale
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-01.jpg" alt="" />
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam venenatis lobortis
                    </p>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Education
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Creative Course
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-02.jpg" alt="" />
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
                    <p>
                      Proin at tortor eros. Phasellus porta nec elit non
                      lacinia. Nam bibendum erat at leo faucibus vehicula. Ut
                      laoreet porttitor risus, eget suscipit tellus tincidunt
                      sit amet.{" "}
                    </p>
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

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Adventure
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Into The Wild
                      </a>
                      <span className="tag">Ad</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-03.jpg" alt="" />
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
                    <p>
                      Nam eget ullamcorper massa. Morbi fringilla lectus nec
                      lorem tristique gravida
                    </p>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Real Estate
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Luxury Apartment
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-04.jpg" alt="" />
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam venenatis lobortis
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Area</figure>
                        <aside>
                          368m<sup>2</sup>
                        </aside>
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

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Architecture
                      </a>
                      <a href="single-listing-1.html" className="title">
                        We'll Redesign Your Apartment
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-05.jpg" alt="" />
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam venenatis lobortis
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Area</figure>
                        <aside>
                          368m<sup>2</sup>
                        </aside>
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

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="ribbon-featured">Featured</div>

                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Jobs
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Seeking for a Job
                      </a>
                      <span className="tag">Demand</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-06.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Delavan, IL</a>
                  </h4>
                  <div className="price">$1,200</div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>10.03.2017
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Aurelio Thomas
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam venenatis lobortis
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Degree</figure>
                        <aside>Bachelor’s</aside>
                      </li>
                      <li>
                        <figure>Category</figure>
                        <aside>Art & Design</aside>
                      </li>
                      <li>
                        <figure>Experience</figure>
                        <aside>5 years</aside>
                      </li>
                      <li>
                        <figure>Language</figure>
                        <aside>English, German</aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Pets & Animals
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Baby Cats
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-07.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Detroit, MI</a>
                  </h4>
                  <div className="price">
                    <span className="appendix">From</span>
                    $80
                  </div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>23.02.2017
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Detroit Pet Center
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Pellentesque ullamcorper justo quis bibendum consequat.
                      Integer id euismod lacus, facilisis faucibus urna.
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Age</figure>
                        <aside>2 weeks</aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Mobiles
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Used Smartphone
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-08.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">West Roxbury, MA</a>
                  </h4>
                  <div className="price">$300</div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>28.02.2017
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Gloria A. Crawford
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Vestibulum congue at justo semper dignissim. Pellentesque
                      ullamcorper justo quis bibendum consequat. Integer id
                      euismod lacus, facilisis faucibus urna.
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Status</figure>
                        <aside>Used</aside>
                      </li>
                      <li>
                        <figure>Brand</figure>
                        <aside>Samsung</aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Cars
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Offroad Car
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-09.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Nehalem, OR</a>
                  </h4>
                  <div className="price">$30,000</div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>14.01.2017
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Leonardo
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Nam eget imperdiet massa. Cras dolor nulla, tristique eu
                      nisl ut, venenatis volutpat massa. Integer imperdiet
                      finibus ipsum vitae scelerisque.
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Brand</figure>
                        <aside>Jeep</aside>
                      </li>
                      <li>
                        <figure>Engine</figure>
                        <aside>Diesel</aside>
                      </li>
                      <li>
                        <figure>Mileage</figure>
                        <aside>28,630</aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <a href="submit.html" className="item call-to-action">
                <div className="wrapper">
                  <div className="title">
                    <i className="fa fa-plus-square-o"></i>
                    Submit Your Ad
                  </div>
                </div>
              </a>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Clothing
                      </a>
                      <a href="single-listing-1.html" className="title">
                        High Boots
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-10.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Raleigh, NC</a>
                  </h4>
                  <div className="price">$67</div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>05.01.2017
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Bobby
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Nam pulvinar mollis tortor, eu lobortis mauris luctus non.
                      Integer lobortis sapien enim, ut imperdiet leo faucibus
                      id. Fusce tincidunt nunc elit, at varius erat rutrum
                      vitae.
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Status</figure>
                        <aside>Used</aside>
                      </li>
                      <li>
                        <figure>Material</figure>
                        <aside>Genuine Leather</aside>
                      </li>
                      <li>
                        <figure>Size</figure>
                        <aside>10</aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Books & Magazines
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Will Buy "Behind the Sea" Book
                      </a>
                      <span className="tag">Demand</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-11.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Long Beach, CA</a>
                  </h4>
                  <div className="price">$30</div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>02.01.2017
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Patty McAlexander
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Mauris nisi ligula, pulvinar eu commodo eu, semper id
                      quam. In vitae purus bibendum, mattis ex nec, eleifend
                      diam. Cras at vehicula metus. Sed elementum lectus ut
                      aliquet vehicula.
                    </p>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Cameras
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Retro Camera
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-12.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Bethany, WV</a>
                  </h4>
                  <div className="price">$120</div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>20.12.2016
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Paula Nelson
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      In vitae purus bibendum, mattis ex nec, eleifend diam.
                      Cras at vehicula metus. Sed elementum lectus ut aliquet
                      vehicula.
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Brand</figure>
                        <aside>Nikon</aside>
                      </li>
                      <li>
                        <figure>Model</figure>
                        <aside>F 35mm SLR </aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Food
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Fresh Bio Vegetables
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-13.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Grand Rapids, MI</a>
                  </h4>
                  <div className="price">
                    <span className="appendix">From</span>
                    $120
                  </div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>20.12.2016
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Paula Nelson
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      In vitae purus bibendum, mattis ex nec, eleifend diam.
                      Cras at vehicula metus. Sed elementum lectus ut aliquet
                      vehicula.
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Brand</figure>
                        <aside>Nikon</aside>
                      </li>
                      <li>
                        <figure>Model</figure>
                        <aside>F 35mm SLR </aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Restaurants
                      </a>
                      <a href="single-listing-1.html" className="title">
                        XL Baron Burger
                      </a>
                      <span className="tag">Ad</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-14.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Burbank, CA</a>
                  </h4>
                  <div className="price">$120</div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>18.12.2016
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Burger Barons
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Vestibulum sodales turpis eget venenatis iaculis. Nam
                      pulvinar mollis tortor, eu lobortis mauris luctus non.
                      Integer lobortis sapien enim, ut imperdiet leo faucibus
                      id.
                    </p>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="ribbon-featured">Featured</div>

                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Photo & Camera
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Professional Photo Shooting
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-15.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Cambridge, MA</a>
                  </h4>
                  <div className="price">
                    <span className="appendix">From</span>
                    $350
                  </div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>12.11.2016
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Kate's Photo
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Morbi lectus massa, consequat blandit eleifend et,
                      venenatis ut orci. Vestibulum finibus metus at lacus
                      egestas pulvinar.
                    </p>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Sport
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Urban Bike
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-16.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Freeport, TX</a>
                  </h4>
                  <div className="price">$140</div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>06.11.2016
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Laura
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Morbi egestas elit et orci interdum, ac tincidunt diam
                      feugiat. Aliquam erat volutpat. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit.
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Brand</figure>
                        <aside>Trek</aside>
                      </li>
                      <li>
                        <figure>Size</figure>
                        <aside>Large</aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Real Estate
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Luxury Villa
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-17.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">St Joe, IN </a>
                  </h4>
                  <div className="price">$360,000</div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>17.10.2016
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Homeland Estate
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      nteger imperdiet finibus ipsum vitae scelerisque.
                      Vestibulum sodales turpis eget venenatis iaculis. Nam
                      pulvinar mollis tortor, eu lobortis mauris luctus non.
                      Integer lobortis sapien enim
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Area</figure>
                        <aside>
                          5,620m<sup>2</sup>
                        </aside>
                      </li>
                      <li>
                        <figure>Size</figure>
                        <aside>Large</aside>
                      </li>
                      <li>
                        <figure>Bedrooms</figure>
                        <aside>4</aside>
                      </li>
                      <li>
                        <figure>Bathrooms</figure>
                        <aside>3</aside>
                      </li>
                      <li>
                        <figure>Garages</figure>
                        <aside>4</aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Cars
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Car Wheels
                      </a>
                      <span className="tag">Offer</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-18.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Bryan, TX</a>
                  </h4>
                  <div className="price">
                    <span className="appendix">From</span>
                    $140
                  </div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>12.10.2016
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>George R. Mund
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Duis tempor velit vel lectus viverra, et finibus justo
                      semper. Morbi egestas elit et orci interdum, ac tincidunt
                      diam feugiat. Aliquam erat volutpat. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Size</figure>
                        <aside>From 17"</aside>
                      </li>
                      <li>
                        <figure>Material</figure>
                        <aside>Alloy</aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>

              <div className="item">
                <div className="wrapper">
                  <div className="image">
                    <h3>
                      <a href="/" className="tag category">
                        Computer
                      </a>
                      <a href="single-listing-1.html" className="title">
                        Will Buy MacBook Pro
                      </a>
                      <span className="tag">Demand</span>
                    </h3>
                    <a
                      href="single-listing-1.html"
                      className="image-wrapper background-image"
                    >
                      <img src="assets/img/image-19.jpg" alt="" />
                    </a>
                  </div>

                  <h4 className="location">
                    <a href="/">Elmsford, NJ</a>
                  </h4>
                  <div className="price">
                    <span className="appendix">Max</span>
                    $2,500
                  </div>
                  <div className="meta">
                    <figure>
                      <i className="fa fa-calendar-o"></i>10.10.2016
                    </figure>
                    <figure>
                      <a href="/">
                        <i className="fa fa-user"></i>Timothy
                      </a>
                    </figure>
                  </div>

                  <div className="description">
                    <p>
                      Quisque in tincidunt quam, quis blandit orci. Proin semper
                      leo mi, efficitur lacinia nunc blandit ac. Vestibulum
                      congue at justo semper dignissim.
                    </p>
                  </div>

                  <div className="additional-info">
                    <ul>
                      <li>
                        <figure>Screen Size</figure>
                        <aside>17"</aside>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="single-listing-1.html"
                    className="detail text-caps underline"
                  >
                    Detail
                  </a>
                </div>
              </div>
            </div>

            <div className="center">
              <a href="/" className="btn btn-primary btn-framed btn-rounded">
                Load More
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
