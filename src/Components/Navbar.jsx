import React from "react";
import { Link} from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
  <Link className="navbar-brand d-flex" to='/'><h2>Users</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to='/' activeclassNameName="active">Home</Link>
        </li> <br />
        <li className="nav-item">
        <Link className="nav-link" to='/create' activeclassNameName="active">Add User</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  };
  export default Navbar;