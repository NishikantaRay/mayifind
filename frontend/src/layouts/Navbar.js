import React from 'react'
import Nav from '../components/Nav'
import PageTitle from '../components/PageTitle'
import PrimaryNav from '../components/PrimaryNav'

export default function Navbar() {
  return (
    <div>
       <header className="hero">
            <div className="hero-wrapper">
                <PrimaryNav/>
                <Nav/>
                <PageTitle/>
            </div>
        </header> 
    </div>
  )
}
