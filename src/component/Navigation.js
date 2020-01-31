import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation">
                <NavLink to="/menu" activeClassName="is-active" exact={true} className="category">Menu</NavLink>
                <NavLink to="/gift" activeClassName="is-active" className="category">Gift</NavLink>
                <NavLink to="/catering" activeClassName="is-active" className="category">Catering</NavLink>
                <NavLink to="/location" activeClassName="is-active" className="category">Location</NavLink>
            </div>
        );
    }
}