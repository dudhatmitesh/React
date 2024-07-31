import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav id='navbarnavg]
    75][poijhui-p09o87i6u5yr4e3w
      \' className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a id='navbarlogo' className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.myhome}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" >Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
       <main></main> <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
  ) 
}

Navbar.propTypes = {
                    title: PropTypes.string.isRequired,
                    myhome:PropTypes.isRequired  
 }
Navbar.defaultProps = {
                    title: 'setgolo tltie mitesh ',
                    myhome:  'sanket'  
 };     