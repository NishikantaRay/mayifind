import React from 'react'
import SideBarListingGrid from '../components/SideBarListingGrid'

export default function Faq() {
  return (
    <div>

<section className="content">
            <section className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <section>
                                <form className="form inputs-underline">
                                    <h3>Search in Answers</h3>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Enter your search"/>
                                    </div>
                                    
                                </form>
                            </section>
                            <section>
                                <div className="answer">
                                    <div className="box">
                                        <h3>Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?</h3>
                                        <p>Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque gravida lacus vel,
                                            dignissim cursus lectus. Aliquam laoreet purus in iaculis sodales. Morbi convallis diam ac accumsan
                                            placerat. Donec ultrices placerat arcu non accumsan
                                        </p>
                                    </div>
                                    <figure>Was this answer helpful? <a href="/">Yes<i className="fa fa-thumbs-up"></i></a> <a href="/">No<i className="fa fa-thumbs-down"></i></a></figure>
                                </div>
                              
                                <div className="answer">
                                    <div className="box">
                                        <h3>Integer a arcu non libero euismod euismod. Donec non porta leo.</h3>
                                        <p>Curabitur consectetur ligula in cursus sagittis. Praesent purus velit, sagittis vel malesuada
                                            nec, ultricies vitae quam. Maecenas aliquet convallis placerat. Aliquam erat volutpat. Nulla
                                            euismod leo eu nulla scelerisque molestie. Sed vehicula metus est  eget molestie elit iaculis
                                            quis. Nulla elementum sem ex, eu lobortis urna convallis nec. Suspendisse nunc mauris, blandit
                                            sed risus eget, pretium ultricies neque. Vivamus ultricies odio sed vehicula hendrerit.
                                            Nunc ultrices scelerisque ligula sit amet aliquam.
                                        </p>
                                    </div>
                                    <figure>Was this answer helpful? <a href="/">Yes<i className="fa fa-thumbs-up"></i></a> <a href="/">No<i className="fa fa-thumbs-down"></i></a></figure>
                                </div>
                              
                                <div className="answer">
                                    <div className="box">
                                        <h3>Fusce ut tempus lacus, pretium vestibulum diam</h3>
                                        <p>Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque gravida lacus
                                            vel, dignissim cursus lectus. Aliquam laoreet purus in iaculis sodales. Morbi convallis diam
                                            ac accumsan placerat. Donec ultrices placerat arcu non accumsan
                                        </p>
                                    </div>
                                    <figure>Was this answer helpful? <a href="/">Yes<i className="fa fa-thumbs-up"></i></a> <a href="/">No<i className="fa fa-thumbs-down"></i></a></figure>
                                </div>
                              
                                <div className="answer">
                                    <div className="box">
                                        <h3>Mauris et mollis augue. Pellentesque habitant morbi tristique senectus</h3>
                                        <p>Donec facilisis est id orci blandit aliquet. Suspendisse volutpat auctor dui in interdum. Pellentesque porttitor augue
                                            quis neque efficitur auctor. Nulla dictum euismod semper. Suspendisse volutpat rutrum enim. Nunc facilisis,
                                            massa vitae vestibulum ultrices, nulla urna molestie purus, nec ultricies nulla nibh lobortis sapien.
                                            Nulla vitae maximus erat.
                                        </p>
                                    </div>
                                    <figure>Was this answer helpful? <a href="/">Yes<i className="fa fa-thumbs-up"></i></a> <a href="/">No<i className="fa fa-thumbs-down"></i></a></figure>
                                </div>
                              
                                <div className="answer">
                                    <div className="box">
                                        <h3> Etiam condimentum quam non dui lacinia</h3>
                                        <p>Sed vel erat mi. Donec hendrerit consectetur ipsum, ut lacinia sem egestas sed. Praesent ac
                                            augue dolor. Proin euismod nulla vel ipsum cursus, nec sagittis risus volutpat. Phasellus
                                            eu quam metus. Ut luctus ut nulla vel blandit. Quisque accumsan mauris non rutrum fermentum.
                                            Phasellus non ornare ligula. Duis maximus vitae est ullamcorper condimentum. Sed consequat
                                            pulvinar turpis, sed condimentum nibh pretium in.
                                        </p>
                                    </div>
                                    <figure>Was this answer helpful? <a href="/">Yes<i className="fa fa-thumbs-up"></i></a> <a href="/">No<i className="fa fa-thumbs-down"></i></a></figure>
                                </div>
                              
                            </section>
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
                        
                        <div className="col-md-3">
                            
                           <SideBarListingGrid/>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </section>
            
        </section>
    </div>
  )
}
