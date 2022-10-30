import React from 'react';
// import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({cartLength}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <span className='text-white'>Ecommerce</span>
                {/* <NavLink className="navbar-brand" to="/">Ecommerce</NavLink> */}
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item text-white">
                            Cart: {cartLength}
                            {/* <Link className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                aria-hidden="true" />Cart {cartLength ? `(${cartLength})` : ''}</Link> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Header;