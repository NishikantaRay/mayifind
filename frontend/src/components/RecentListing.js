import React from 'react'

export default function RecentListing() {
  return (
    <div>
        <div className='page home-page'>
        <section classNameName="content">
            <section className="block">
                <div className="container">
                    
                    <div className="section-title clearfix">
                        <div className="float-xl-left float-md-left float-sm-none">
                            <h2>Recent Listings</h2>
                        </div>
                        <div className="float-xl-right float-md-right float-sm-none">
                            <select name="categories" id="categories" className="small width-200px" data-placeholder="Category" >
                                <option value="">Category</option>
                                <option value="1">Computers</option>
                                <option value="2">Real Estate</option>
                                <option value="3">Cars & Motorcycles</option>
                                <option value="4">Furniture</option>
                                <option value="5">Pets & Animals</option>
                            </select>
                            <select name="sorting" id="sorting" className="small width-200px" data-placeholder="Default Sorting" >
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
                        

                    </div>
                    

                    <div className="center">
                        <a href="/" className="btn btn-primary btn-framed btn-rounded">Load More</a>
                    </div>
                </div>
               
            </section>
       
        </section>
        </div>
        
      
    </div>
    
  )
}
