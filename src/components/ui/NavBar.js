import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types';

export const Navbar = () => {

    const { user:{name}, dispatch } = useContext( AuthContext );
    const history = useHistory();

    const handleLogout = () => {
         
        history.replace('/login');

        dispatch({
            type: types.logout
        })
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Publisher
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ms-auto">
                        
                        <span className="nav-item nav-link text-info">
                        { name }
                      
                        </span>

                        <button
                            className="nav-item nav-link btn"
                            onClick={ handleLogout }
                        >
                            Logout
                            <i className="ms-2"><FontAwesomeIcon  icon={ faSignOutAlt } /></i>
                    </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}