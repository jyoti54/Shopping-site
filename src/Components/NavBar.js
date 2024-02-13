import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavBar() {
    const cartProducts = useSelector(state=>state.cart);
    

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/categories">Categories</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/product">Product</Link>
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                            <Link className="nav-link" to="/register">Register</Link>
                            <Link className="nav-link" to="/login">LogIn</Link>
                            <Link className="nav-link" to="/cart">Cart {cartProducts.length}</Link>
                            <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>                            
                        </div>                        
                    </div>                    
                </div>
            </nav>

        </>
    )
}

export default NavBar