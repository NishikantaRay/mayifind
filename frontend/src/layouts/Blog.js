import React from 'react'
import BlogPostSidebar from '../components/BlogPostSidebar'

export default function Blog() {
  return (
    <div>
        <section class="content">
            <section class="block">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">

                            <article class="blog-post clearfix">
                                <a href="blog-post.html">
                                    <img src="assets/img/blog-image-01.jpg" alt=""/>
                                </a>
                                <div class="article-title">
                                    <h2><a href="blog-post.html">10 tips for renovation</a></h2>
                                    <div class="tags framed">
                                        <a href="/" class="tag">Home & Decor</a>
                                        <a href="/" class="tag">Design</a>
                                    </div>
                                </div>
                                <div class="meta">
                                    <figure>
                                        <a href="/" class="icon">
                                            <i class="fa fa-user"></i>
                                            John Doe
                                        </a>
                                    </figure>
                                    <figure>
                                        <i class="fa fa-calendar-o"></i>
                                        02.05.2017
                                    </figure>
                                </div>
                                <div class="blog-post-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                        amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                        per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                        risus mi euismod elit
                                    </p>
                                    <a href="blog-post.html" class="btn btn-primary btn-framed detail">Read more</a>
                                </div>
                            </article>

                            <article class="blog-post clearfix">
                                <a href="blog-post.html">
                                    <img src="assets/img/blog-image-02.jpg" alt=""/>
                                </a>
                                <div class="article-title">
                                    <h2><a href="blog-post.html">Professional kitchen at your home</a></h2>
                                    <div class="tags framed">
                                        <a href="/" class="tag">Home & Decor</a>
                                        <a href="/" class="tag">Design</a>
                                    </div>
                                </div>
                                <div class="meta">
                                    <figure>
                                        <a href="/" class="icon">
                                            <i class="fa fa-user"></i>
                                            John Doe
                                        </a>
                                    </figure>
                                    <figure>
                                        <i class="fa fa-calendar-o"></i>
                                        02.05.2017
                                    </figure>
                                </div>
                                <div class="blog-post-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                        amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                        per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                        risus mi euismod elit
                                    </p>
                                    <a href="blog-post.html" class="btn btn-primary btn-framed detail">Read more</a>
                                </div>
                            </article>

                            <article class="blog-post clearfix">
                                <a href="blog-post.html">
                                    <img src="assets/img/blog-image-06.jpg" alt=""/>
                                </a>
                                <div class="article-title">
                                    <h2><a href="blog-post.html">8 Things to Remember Every Morning</a></h2>
                                    <div class="tags framed">
                                        <a href="/" class="tag">Home & Decor</a>
                                        <a href="/" class="tag">Design</a>
                                    </div>
                                </div>
                                <div class="meta">
                                    <figure>
                                        <a href="/" class="icon">
                                            <i class="fa fa-user"></i>
                                            John Doe
                                        </a>
                                    </figure>
                                    <figure>
                                        <i class="fa fa-calendar-o"></i>
                                        02.05.2017
                                    </figure>
                                </div>
                                <div class="blog-post-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                        amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                        per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                        risus mi euismod elit
                                    </p>
                                    <a href="blog-post.html" class="btn btn-primary btn-framed detail">Read more</a>
                                </div>
                            </article>

                            

                            <div class="page-pagination">
                                <nav aria-label="Pagination">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="/" aria-label="Previous">
                                        <span aria-hidden="true">
                                            <i class="fa fa-chevron-left"></i>
                                        </span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item active">
                                            <a class="page-link" href="/">1</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="/">2</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="/">3</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="/" aria-label="Next">
                                        <span aria-hidden="true">
                                            <i class="fa fa-chevron-right"></i>
                                        </span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            
                        </div>
                        

                        <div class="col-md-4">
                            <BlogPostSidebar/>
                        </div>
                        
                    </div>
                </div>
                
            </section>
            
        </section>
    </div>
  )
}
