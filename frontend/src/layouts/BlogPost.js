import React from 'react'
import AddComment from '../components/AddComment'
import BlogPostSidebar from '../components/BlogPostSidebar'
import Comments from '../components/Comments'

export default function BlogPost() {
  return (
    <div>
<section className="content">
            <section className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">

                            <article className="blog-post clearfix">
                                <a href="blog-post.html">
                                    <img src="assets/img/blog-image-01.jpg" alt=""/>
                                </a>
                                <div className="article-title">
                                    <h2><a href="blog-post.html">10 tips for renovation</a></h2>
                                    <div className="tags framed">
                                        <a href="/" className="tag">Home & Decor</a>
                                        <a href="/" className="tag">Design</a>
                                    </div>
                                </div>
                                <div className="meta">
                                    <figure>
                                        <a href="/" className="icon">
                                            <i className="fa fa-user"></i>
                                            John Doe
                                        </a>
                                    </figure>
                                    <figure>
                                        <i className="fa fa-calendar-o"></i>
                                        02.05.2017
                                    </figure>
                                </div>
                                <div className="blog-post-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                        amet fermentum sem. className aptent taciti sociosqu ad litora torquent per conubia nostra,
                                        per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                        risus mi euismod elit
                                    </p>
                                    <h2>In nec nulla nec enim</h2>
                                    <p>
                                        vehicula mattis id vel nunc. Quisque vel augue in erat scelerisque egestas at et
                                        leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas. Ut cursus orci et lacus imperdiet, sed maximus nibh laoreet.
                                        Nam posuere dolor id orci fringilla, imperdiet porttitor justo varius. Proin ac
                                        lorem condimentum, iaculis tortor sed, semper dui. Praesent dignissim posuere
                                        euismod. Donec cursus massa nisi, eget lobortis eros vestibulum vitae. Vivamus a
                                        sapien sem. Praesent in massa dui. Aliquam augue sem, porttitor in orci quis,
                                        tempus bibendum purus. Suspendisse at aliquet ex, id egestas nisi. Donec quis
                                        dictum elit. Nullam sed sodales nisl. Duis eget consectetur ante, eu sodales nisi.
                                    </p>
                                    <hr/>
                                    <div className="author">
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
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu,
                                                sit amet fermentum sem. className aptent taciti sociosqu ad litora torquent per
                                                conubia nostra, per inceptos himenaeos.
                                            </p>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </article>

                            

                            <section>
                                <div className="blog-posts-navigation clearfix">
                                    <a href="/" className="prev">
                                        <i className="fa fa-chevron-left"></i>
                                        <figure>Previous Post</figure>
                                        <h3>Concrete Decorations</h3>
                                    </a>
                                    
                                    <a href="/" className="next">
                                        <i className="fa fa-chevron-right"></i>
                                        <figure>Next Post</figure>
                                        <h3>Professional kitchen at your home</h3>
                                    </a>
                                </div>
                                
                            </section>

                            <hr/>

                            <section>
                               <Comments/>
                                
                            </section>

                            <section>
                                <AddComment/>
                                
                            </section>
                        </div>
                        

                        <div className="col-md-4">
                            
                            <BlogPostSidebar/>
                            
                        </div>
                        
                    </div>
                </div>
                
            </section>
            
        </section>
    </div>
  )
}
