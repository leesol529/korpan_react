import React from 'react';
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header_div">
                    <div className="left_logo">
                        <hr />
                    </div>
                    <div className="logo_div">
                        <img src={logo} alt="logo" className="logo" />
                        <div>
                            <h3 className="restaurantName">KORPAN</h3>
                            <h4 className="desc">Korean&Japanese Restaurant</h4>
                        </div>
                    </div>
                    <div className="right_logo">
                        <hr />
                    </div>
                </div>
                <div className="menubar">
                    <NavLink to="/menu" activeClassName="is-active" exact={true}>Menu</NavLink>
                    <NavLink to="/catering" activeClassName="is-active">Catering</NavLink>
                    <NavLink to="/gift" activeClassName="is-active">Gift</NavLink>
                    <NavLink to="/location" activeClassName="is-active">Location</NavLink>
                </div>
            </div >
        );
    }
}