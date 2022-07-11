import React from 'react'

export default function WriteAReview() {
  return (
    <div>
        <h2>Write a Review</h2>
                                <form className="form">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="subject" className="col-form-label">Subject</label>
                                                <input name="subject" type="text" className="form-control" id="subject" placeholder="Did you like a deal?"/>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="rating" className="col-form-label">Rating</label>
                                                <select name="rating" id="rating" data-placeholder="Select Rating">
                                                    <option value="">Select Rating</option>
                                                    <option value="1" data-option-stars="1">Horrible</option>
                                                    <option value="2" data-option-stars="2">Average</option>
                                                    <option value="3" data-option-stars="3">Good</option>
                                                    <option value="4" data-option-stars="4">Very Good</option>
                                                    <option value="5" data-option-stars="5">Excellent</option>
                                                </select>
                                            </div>
                                            
                                        </div>
                                       
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="review" className="col-form-label">Your Review</label>
                                                <textarea name="review" id="review" className="form-control" rows="4" placeholder="Good seller, I am satisfied."></textarea>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </form>
    </div>
  )
}
