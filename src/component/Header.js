import React from 'react';
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="myheader">
                <div className="logo">
                    <div className="left-line">
                        <hr className="lines" />
                    </div>
                    <div className="restaurant_name">
                        Korpan
                    </div>
                    <div className="right-line">
                        <hr className="lines" />
                    </div>
                </div>
                <div className="introduce_restaurant">
                    Korean & Japanese Restaurant
                </div>
            </div>
        );
    }
}