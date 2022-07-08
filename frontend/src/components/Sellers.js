import React from 'react'

export default function Sellers() {
  return (
    <div>
        <section className="content">
            <section className="block">
                <div className="container">
                    
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
                        <div className="float-right d-xs-none thumbnail-toggle">
                            <a href="/" className="change-className active" data-change-from-className="list" data-change-to-className="masonry" data-parent-className="authors">
                                <i className="fa fa-th"></i>
                            </a>
                            <a href="/" className="change-className" data-change-from-className="masonry" data-change-to-className="list" data-parent-className="authors">
                                <i className="fa fa-th-list"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="authors masonry items grid-xl-4-items grid-lg-4-items grid-md-4-items">
                        <div className="item author">
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="seller-detail-1.html" className="title">Jane Great</a>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src="assets/img/author-02.jpg" alt=""/>
                                    </a>
                                </div>
                                
                                <h4 className="location">
                                    <a href="/">Nashville, TN</a>
                                </h4>
                                <div className="meta">
                                    <figure>
                                        <div className="rating" data-rating="4"></div>
                                    </figure>
                                    <figure>
                                        <a href="/">
                                            <i className="fa fa-user"></i><strong>36</strong> Listings
                                        </a>
                                    </figure>
                                </div>
                                
                                <div className="description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                                </div>
                               
                                <div className="additional-info">
                                    <ul>
                                        <li>
                                            <figure>Email</figure>
                                            <aside>jane.great@example.com</aside>
                                        </li>
                                        <li>
                                            <figure>Phone</figure>
                                            <aside>+1 123 456 789</aside>
                                        </li>
                                    </ul>
                                </div>
                                
                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                            </div>
                        </div>
                        

                        <div className="item author">
                            <div className="ribbon-featured">Top Rated</div>
                            
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="seller-detail-1.html" className="title">John E. Metzger</a>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src="assets/img/author-03.jpg" alt=""/>
                                    </a>
                                </div>
                                
                                <h4 className="location">
                                    <a href="/">Spokane, WA</a>
                                </h4>
                                <div className="meta">
                                    <figure>
                                        <div className="rating" data-rating="5"></div>
                                    </figure>
                                    <figure>
                                        <a href="/">
                                            <i className="fa fa-user"></i><strong>57</strong> Listings
                                        </a>
                                    </figure>
                                </div>
                                
                                <div className="additional-info">
                                    <ul>
                                        <li>
                                            <figure>Email</figure>
                                            <aside>john.m@example.com</aside>
                                        </li>
                                        <li>
                                            <figure>Phone</figure>
                                            <aside>+1 123 456 789</aside>
                                        </li>
                                    </ul>
                                </div>
                                
                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                            </div>
                        </div>
                        

                        <div className="item author">
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="seller-detail-1.html" className="title">Rosina Warner</a>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src="assets/img/author-04.jpg" alt=""/>
                                    </a>
                                </div>
                                
                                <h4 className="location">
                                    <a href="/">Orlando, FL</a>
                                </h4>
                                <div className="meta">
                                    <figure>
                                        <div className="rating" data-rating="4"></div>
                                    </figure>
                                    <figure>
                                        <a href="/">
                                            <i className="fa fa-user"></i><strong>12</strong> Listings
                                        </a>
                                    </figure>
                                </div>
                                
                                <div className="additional-info">
                                    <ul>
                                        <li>
                                            <figure>Email</figure>
                                            <aside>rosinsa5@example.com</aside>
                                        </li>
                                        <li>
                                            <figure>Phone</figure>
                                            <aside>+1 123 456 789</aside>
                                        </li>
                                        <li>
                                            <figure>Skype</figure>
                                            <aside>Rosina5</aside>
                                        </li>
                                        <li>
                                            <figure>Facebook</figure>
                                            <aside>fb.me/rosina</aside>
                                        </li>
                                    </ul>
                                </div>
                                
                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                            </div>
                        </div>
                        

                        <div className="item author">
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="seller-detail-1.html" className="title">Robert Mathews</a>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src="assets/img/author-05.jpg" alt=""/>
                                    </a>
                                </div>
                                
                                <h4 className="location">
                                    <a href="/">Saint Anthony, ID</a>
                                </h4>
                                <div className="meta">
                                    <figure>
                                        <div className="rating" data-rating="3"></div>
                                    </figure>
                                    <figure>
                                        <a href="/">
                                            <i className="fa fa-user"></i><strong>32</strong> Listings
                                        </a>
                                    </figure>
                                </div>
                                
                                <div className="description">
                                    <p>
                                        Maecenas varius tempus libero ut pellentesque. Praesent velit ipsum
                                    </p>
                                </div>
                               
                                <div className="additional-info">
                                    <ul>
                                        <li>
                                            <figure>Email</figure>
                                            <aside>robert.mat@example.com</aside>
                                        </li>
                                        <li>
                                            <figure>Phone</figure>
                                            <aside>+1 123 456 789</aside>
                                        </li>
                                    </ul>
                                </div>
                                
                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                            </div>
                        </div>
                        

                        <div className="item author">
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="seller-detail-1.html" className="title">Martina Whittaker</a>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src="assets/img/author-06.jpg" alt=""/>
                                    </a>
                                </div>
                                
                                <h4 className="location">
                                    <a href="/">Louisville, KY</a>
                                </h4>
                                <div className="meta">
                                    <figure>
                                        <div className="rating" data-rating="4"></div>
                                    </figure>
                                    <figure>
                                        <a href="/">
                                            <i className="fa fa-user"></i><strong>54</strong> Listings
                                        </a>
                                    </figure>
                                </div>
                                
                                <div className="description">
                                    <p>
                                        Maecenas varius tempus libero ut pellentesque. Praesent velit ipsum
                                    </p>
                                </div>
                               
                                <div className="additional-info">
                                    <ul>
                                        <li>
                                            <figure>Email</figure>
                                            <aside>hello@example.com</aside>
                                        </li>
                                        <li>
                                            <figure>Phone</figure>
                                            <aside>+1 123 456 789</aside>
                                        </li>
                                    </ul>
                                </div>
                                
                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                            </div>
                        </div>
                        

                        <div className="item author">
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="seller-detail-1.html" className="title">Ronnie R. Landers</a>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src="assets/img/author-01.jpg" alt=""/>
                                    </a>
                                </div>
                                
                                <h4 className="location">
                                    <a href="/">Saint Anthony, ID</a>
                                </h4>
                                <div className="meta">
                                    <figure>
                                        <div className="rating" data-rating="3"></div>
                                    </figure>
                                    <figure>
                                        <a href="/">
                                            <i className="fa fa-user"></i><strong>32</strong> Listings
                                        </a>
                                    </figure>
                                </div>
                                
                                <div className="description">
                                    <p>
                                        Maecenas varius tempus libero ut pellentesque. Praesent velit ipsum
                                    </p>
                                </div>
                               
                                <div className="additional-info">
                                    <ul>
                                        <li>
                                            <figure>Email</figure>
                                            <aside>robert.mat@example.com</aside>
                                        </li>
                                        <li>
                                            <figure>Phone</figure>
                                            <aside>+1 123 456 789</aside>
                                        </li>
                                    </ul>
                                </div>
                                
                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                            </div>
                        </div>
                        

                        <div className="item author">
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="seller-detail-1.html" className="title">Angelia Teems</a>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src="assets/img/author-08.jpg" alt=""/>
                                    </a>
                                </div>
                                
                                <h4 className="location">
                                    <a href="/">Asbury, KS</a>
                                </h4>
                                <div className="meta">
                                    <figure>
                                        <div className="rating" data-rating="5"></div>
                                    </figure>
                                    <figure>
                                        <a href="/">
                                            <i className="fa fa-user"></i><strong>38</strong> Listings
                                        </a>
                                    </figure>
                                </div>
                                
                                <div className="description">
                                    <p>
                                        Maecenas varius tempus libero ut pellentesque. Praesent velit ipsum
                                    </p>
                                </div>
                               
                                <div className="additional-info">
                                    <ul>
                                        <li>
                                            <figure>Email</figure>
                                            <aside>hello@example.com</aside>
                                        </li>
                                        <li>
                                            <figure>Phone</figure>
                                            <aside>+1 123 456 789</aside>
                                        </li>
                                    </ul>
                                </div>
                                
                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                            </div>
                        </div>
                        

                        <div className="item author">
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="seller-detail-1.html" className="title">Stephen Brunetti</a>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src="assets/img/author-07.jpg" alt=""/>
                                    </a>
                                </div>
                                
                                <h4 className="location">
                                    <a href="/">Memphis, TN</a>
                                </h4>
                                <div className="meta">
                                    <figure>
                                        <div className="rating" data-rating="3"></div>
                                    </figure>
                                    <figure>
                                        <a href="/">
                                            <i className="fa fa-user"></i><strong>41</strong> Listings
                                        </a>
                                    </figure>
                                </div>
                                
                                <div className="description">
                                    <p>
                                        Maecenas varius tempus libero ut pellentesque. Praesent velit ipsum
                                    </p>
                                </div>
                               
                                <div className="additional-info">
                                    <ul>
                                        <li>
                                            <figure>Email</figure>
                                            <aside>stephen@example.com</aside>
                                        </li>
                                        <li>
                                            <figure>Phone</figure>
                                            <aside>+1 123 456 789</aside>
                                        </li>
                                    </ul>
                                </div>
                                
                                <a href="single-listing-1.html" className="detail text-caps underline">Detail</a>
                            </div>
                        </div>
                        

                    </div>
                    
                    <div className="page-pagination">
                        <nav aria-label="Pagination">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Previous">
                                        <span aria-hidden="true">
                                            <i className="fa fa-chevron-left"></i>
                                        </span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="/">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Next">
                                        <span aria-hidden="true">
                                            <i className="fa fa-chevron-right"></i>
                                        </span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                </div>
                
            </section>
            
        </section>
    </div>
  )
}
