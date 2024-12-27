import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container">
        <a className="navbar-brand" href="#">PDS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
              <Link className="nav-link" to={'/catogre'}>Catogare</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/product'}>product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/add'}>AddProduct</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/qoutes'}>Quotes</Link>
            </li>
        
          </ul>
        
        </div>
      </div>
    </nav>
    
      )
}
