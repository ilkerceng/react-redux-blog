import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter, Link } from 'react-router-dom';
import { get_user_type } from '../../state_management/login/selectors/get_user_type';
import { userType } from '../../state_management/login/user_constants';

/**
 *  - Header
 *      - Not Authenticated
 *          - Login Button
 *          - SignIn Button
 * 
 *      - Authenticated
 *          - Home
 *          - Profile
 *          - Log Out
 *          
 */



export const HeaderAuthenticatedUser = (props) => (
    <ul className="nav  nav-pills navbar-right">
        <li style={{ paddingRight: '10px' }} role="presentation">
            <Link role="presentation" style={{ color: '#996633', fontSize: '17px' }} to="/">
                {"Home"}
            </Link>
        </li>
        <li style={{ paddingRight: '10px' }} role="presentation">
            <Link role="presentation" style={{ color: '#996633', fontSize: '17px' }} to="/profile">
                {"Profile"}
            </Link>
        </li>
        <li style={{ paddingRight: '10px' }} role="presentation">
            <a style={{ color: '#996633', fontSize: '17px' }} onClick={props.logout} href="javascript:void(0)">
                {"Log out"}
            </a>
        </li>
    </ul>
);

export const HeaderNotAuthenticatedUser = () => (
    <ul className="nav nav-pills navbar-right">
        <li style={{ paddingRight: '10px' }} role="presentation">
            <Link role="presentation" style={{ color: '#996633', fontSize: '17px' }} to="/signup">
                {"Sign up"}
            </Link>
        </li>
        <li style={{ paddingRight: '10px' }} role="presentation">
            <Link style={{ color: '#996633', fontSize: '17px' }} to="/signin">
                {"Sign in"}
            </Link>
        </li>
    </ul>
);

export const renderHeader = ({ type = userType.GUEST, ...otherProps }) => {
    if (type === userType.USER) {
        return (
            <HeaderAuthenticatedUser {...otherProps} />
        );
    }

    return (
        <HeaderNotAuthenticatedUser {...otherProps} />
    );
}

export const renderLinks = (props) => {
    return (
        <div className="container">
            {renderHeader(props)}
        </div>
    );
};


class Header extends Component {
    render() {
        console.log("test");
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div id="navbar" className="navbar-collapse collapse">
                    {renderLinks(this.props)}
                </div>
            </nav>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}


function mapStateToProps(state) {
    return {
        type: get_user_type(state.user)
    };
}

Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
export default Header;
