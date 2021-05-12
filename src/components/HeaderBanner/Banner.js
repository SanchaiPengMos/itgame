import React, { Component } from 'react'
import './TopBanner.css'


export default class TopBanner extends Component {

    render() {
        return (
            <div>

                <div className="bannner">
                    <img src="https://th-shop.in.th/img/logo/lognav.png" alt="Logo" />
                </div>

                

                <div className="dropdown">

                    <ul className="nav__menu">
                        <li className="nav__menu-item">Home</li>
                        <li className="nav__menu-item">About</li>
                            <ul className="nav__submenu">
                                <li className="nav__submenu-item ">Our Company</li>
                                <li className="nav__submenu-item ">Our Team</li>
                                <li className="nav__submenu-item ">Our Portfolio</li>
                            </ul>
                        <li className="nav__menu-item">Contact</li>
                    </ul>
                 </div>

            </div>
        )
    }
}