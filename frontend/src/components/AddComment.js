import React from 'react'

export default function AddComment() {
  return (
    <div>
        <h2>Add Comment</h2>
                                <form className="form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name" className="col-form-label">Your Name</label>
                                                <input name="name" type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email" className="col-form-label">Your Email</label>
                                                <input name="email" type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="comment" className="col-form-label">Your Comment</label>
                                                <textarea name="comment" id="comment" className="form-control" rows="4" placeholder="Your Comment"></textarea>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary float-right">Add Comment</button>
                                </form>
    </div>
  )
}
