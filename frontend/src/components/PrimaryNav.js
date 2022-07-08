import React from 'react'

export default function PrimaryNav() {
  return (
    <div>
     <div className="secondary-navigation">
                    <div className="container">
                        <ul className="left">
                            <li>
                            <span>
                                <i className="fa fa-phone"></i> +1 123 456 789
                            </span>
                            </li>
                        </ul>
                     
                        <ul className="right">
                            <li>
                                <a href="my-ads.html">
                                    <i className="fa fa-heart"></i>My Ads
                                </a>
                            </li>
                            <li>
                                <a href="sign-in.html">
                                    <i className="fa fa-sign-in"></i>Sign In
                                </a>
                            </li>
                            <li>
                                <a href="register.html">
                                    <i className="fa fa-pencil-square-o"></i>Register
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                 
                </div>   
    </div>
  )
}
