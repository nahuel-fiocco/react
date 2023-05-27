import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar({cantidadProductos}) {
    return (
        <div className='container-fluid d-flex justify-content-center sticky-top'>
            <nav className="navbar">
                <NavLink to={'/'} className="navbar-brand" activeclassname='fw-bold'>
                    <img width={30} src='https://upload.wikimedia.org/wikipedia/commons/f/f6/Samsung_icon.svg' alt="Samsung Icon" />
                </NavLink>
                <NavLink to={'/category/Serie_S'} className="nav-link text-light" activeclassname='fw-bold'>
                    Serie S
                </NavLink>
                <NavLink to={'/category/Serie_A'} className="nav-link text-light" activeclassname='fw-bold'>
                    Serie A
                </NavLink>
                <NavLink to={'/category/Accesorios'} className="nav-link text-light" activeclassname='fw-bold'>
                    Accesorios
                </NavLink>
                <NavLink to={'/Soporte'} className="nav-link text-light" activeclassname='fw-bold'>
                    Soporte
                </NavLink>
                <NavLink to='/Carrito' className="nav-link text-light" activeclassname='fw-bold'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Antu_amarok_cart_add.svg" alt="Cart Icon White" width={30} />
                    <span className="badge bg-danger">{cantidadProductos}</span>
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar