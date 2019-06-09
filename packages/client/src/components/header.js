import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class Header extends Component {
    renderSignInLinks(authenticatedUser) {
        if (authenticatedUser) {
            return (
                <ul className="nav  nav-pills navbar-right">
                    <li style={{ paddingRight: '10px' }} role="presentation">
                        <Link role="presentation" style={{ color: '#996633', fontSize: '17px' }} to="/profile">
                            {authenticatedUser.name}
                        </Link>
                    </li>
                    <li style={{ paddingRight: '10px' }} role="presentation">
                        <a style={{ color: '#996633', fontSize: '17px' }} onClick={this.props.logout} href="javascript:void(0)">
                            {"Log out"}
                        </a>
                    </li>
                </ul>
            );
        }

        return (
            <ul className="nav  nav-pills navbar-right">
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
    }

    renderLinks() {
        const { type, authenticatedUser } = this.props;
        if (type === 'log_out') {
            return (
                <div className="container">
                    <ul className="nav  nav-pills navbar-right">
                        <li>
                            <Link style={{ color: '#337ab7', fontSize: '17px' }} to="/">
                                {"Home"}
                            </Link>
                        </li>
                    </ul>
                    {this.renderSignInLinks(authenticatedUser)}

                </div>
            );
        } else if (type === 'log_in') {
            return (
                <div className="container">
                    {this.renderSignInLinks(authenticatedUser)}
                    <ul className="nav  nav-pills navbar-left">
                        <li style={{ paddingRight: '10px' }} role="presentation">
                            <Link className="text-xs-right" style={{ color: '#337ab7', fontSize: '17px' }} to="/">Back To Index</Link>
                        </li>
                    </ul>
                </div>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div id="navbar" className="navbar-collapse collapse">
                    {this.renderLinks()}
                </div>
            </nav>
        );
    }
}


Header = withRouter(Header);
export default Header;
