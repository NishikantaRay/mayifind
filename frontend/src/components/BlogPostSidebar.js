import React from 'react'

export default function BlogPostSidebar() {
  return (
    <div>
        <aside className="sidebar">
                                <section>
                                    <h2>Search Blog</h2>
                                   
                                    <form className="sidebar-form form">
                                        <div className="form-group">
                                            <label htmlFor="what" className="col-form-label">What?</label>
                                            <input name="keyword" type="text" className="form-control" id="what" placeholder="Enter keyword and press enter"/>
                                        </div>
                                        
                                    </form>
                                    
                                </section>
                                <section>
                                    <h2>Popular Posts</h2>
                                    <div className="sidebar-post">
                                        <a href="blog-post.html" className="background-image">
                                            <img src="assets/img/blog-image-03.jpg"/>
                                        </a>
                                        
                                        <div className="description">
                                            <h4>
                                                <a href="blog-post.html">How to build a cool swimming pool</a>
                                            </h4>
                                            <div className="meta">
                                                <a href="/">John Doe</a>
                                                <figure>02.05.2017</figure>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    

                                    <div className="sidebar-post">
                                        <a href="blog-post.html" className="background-image">
                                            <img src="assets/img/blog-image-04.jpg"/>
                                        </a>
                                        
                                        <div className="description">
                                            <h4>
                                                <a href="blog-post.html">Concrete decorations can be beautiful</a>
                                            </h4>
                                            <div className="meta">
                                                <a href="/">John Doe</a>
                                                <figure>02.05.2017</figure>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    

                                    <div className="sidebar-post">
                                        <a href="blog-post.html" className="background-image">
                                            <img src="assets/img/blog-image-05.jpg"/>
                                        </a>
                                        
                                        <div className="description">
                                            <h4>
                                                <a href="blog-post.html">Let’s take a break</a>
                                            </h4>
                                            <div className="meta">
                                                <a href="/">John Doe</a>
                                                <figure>02.05.2017</figure>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    

                                </section>

                                <section>
                                    <h2>Popular Post</h2>
                                    <ul className="sidebar-list list-unstyled">
                                        <li>
                                            <a href="/">January 2017<span>4</span></a>
                                        </li>
                                        <li>
                                            <a href="/">February 2017<span>12</span></a>
                                        </li>
                                        <li>
                                            <a href="/">October 2016<span>8</span></a>
                                        </li>
                                        <li>
                                            <a href="/">August 2016<span>3</span></a>
                                        </li>
                                        <li>
                                            <a href="/">May 2016<span>11</span></a>
                                        </li>
                                    </ul>
                                </section>
                            </aside>
    </div>
  )
}
