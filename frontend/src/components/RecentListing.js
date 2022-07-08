import React from 'react'

export default function RecentListing() {
    const card=[{
        id:1,
        tagcategory:"Home & Decor",
        title:"Furniture for sale",
        tag:"Offer",
        image:"assets/img/image-01.jpg",
        location:"Manhattan, NY",
        price:"$80",
        date:"02.05.2017",
        name:"John Doe",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
        button:"Detail"        
    },
    {
        id:2,
        tagcategory:"Home & Decor",
        title:"Furniture for sale",
        tag:"Offer",
        image:"assets/img/image-02.jpg",
        location:"Manhattan, NY",
        price:"$80",
        date:"02.05.2017",
        name:"John Doe",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis",
        button:"Detail"        
    }
];

  return (
    <div>
        <div className='page home-page'>
        <section className="content">
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
                       
                        {card.map((card,key) => (
                            <div className="item" key={key}>
                            <div className="wrapper">
                                <div className="image">
                                    <h3>
                                        <a href="/" className="tag category">{card.tagcategory}</a>
                                        <a href="single-listing-1.html" className="title">{card.title}</a>
                                        <span className="tag">{card.tag}</span>
                                    </h3>
                                    <a href="single-listing-1.html" className="image-wrapper background-image">
                                        <img src={card.image} alt=""/>
                                    </a>
                                </div>
                                
                                <h4 className="location">
                                    <a href="/">{card.location}</a>
                                </h4>
                                <div className="price">{card.price}</div>
                                <div className="meta">
                                    <figure>
                                        <i className="fa fa-calendar-o"></i>{card.date}
                                    </figure>
                                    <figure>
                                        <a href="/">
                                            <i className="fa fa-user"></i>{card.name}
                                        </a>
                                    </figure>
                                </div>
                                
                                <div className="description">
                                    <p>{card.description}</p>
                                </div>
                               
                                <a href="single-listing-1.html" className="detail text-caps underline">{card.button}</a>
                            </div>
                        </div>
                        ))}

                     
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
