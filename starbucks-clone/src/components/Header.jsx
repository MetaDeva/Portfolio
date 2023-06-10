import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../Images/sblogo.svg"

import Y from '../Images/dropdown--close.svg'

export default function Header(props) {

    const { scrollToElement, inputDisplayItems, setInputToggled, isMerchandise } = props; // Updated variable name

    function dropDownInputToggle(boolean) {
        setInputToggled(boolean)
        scrollToElement()
    }

    const styles = {
        rotate: props.toggled ? "90deg" : "0deg"
    }

    // View the very top of a webpage when transferring to other pages
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    const dropInput = (
        <div className='dropdown-input-container'>
            <div className="dropdown-input-box">
                <div className="dropdown-input">

                    <div className='dropdown-exit'>
                        <h2> Search Our {isMerchandise ? 'Merchandise' : 'Menu'}</h2>
                        <span> <img src={Y} onClick={() => dropDownInputToggle(false)} alt='' /> </span>
                    </div>


                    <input
                        type='text'
                        placeholder={`Search our ${isMerchandise ? 'Merchandise' : 'drinks, food, coffee'} `}
                        value={props.searchInput || ''}
                        onChange={(e) => inputDisplayItems(e)}
                        onSubmit={(e) => inputDisplayItems(e)}
                    />

                    <button onClick={() => dropDownInputToggle(false)}> Search </button>


                </div>
            </div>
            <div className='dropdown--overlay'> </div>
        </div>
    )

    return (

        < header >
            < nav className='head--nav' >
                <div className="logo--container">
                    <Link to="/home" onClick={handleLinkClick}> <img src={logo} className="logo" alt='' /> </Link>

                    <ul>
                        <li>
                            <NavLink
                                to="/menu"
                                onClick={handleLinkClick}
                                activeclassname="active">
                                MENU
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/merchandise"
                                onClick={handleLinkClick}
                                activeclassname="active"
                            >
                                MERCHANDISE
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/rewards"
                                onClick={handleLinkClick}
                                activeclassname="active"
                            >
                                REWARDS
                            </NavLink>
                        </li>
                    </ul>
                </div>


                <div className="header-button--container">
                    <span>Find a Store</span>
                    <button className="btn--sign-in">Sign In</button>
                    <button className="btn--join-now">Join Now</button>
                </div>


                <button className="nav-toggle" onClick={props.toggleFunction} style={styles}>
                    <i className="fa fa-bars fa-2x"></i>
                </button>

            </nav >

            {
                props.inputToggle ?
                    dropInput
                    :
                    ''
            }

            {props.toggled &&
                <div>
                    <nav className='drawer--nav open' >
                        <ul>
                            <li><Link to="/menu" onClick={handleLinkClick}> MENU </Link ></li>
                            <li><Link to="/merchandise" onClick={handleLinkClick}> MERCHANDISE </Link ></li>
                            <li><Link to="/rewards" onClick={handleLinkClick}> REWARDS </Link ></li>
                        </ul>

                        <div>
                            <div className="drawer-button--container">
                                <span>Find a Store</span>
                                <button className="drawer-btn--sign-in">Sign In</button>
                                <button className="drawer-btn--join-now">Join Now</button>
                            </div>
                        </div>
                    </nav>
                    <div className='drawer--overlay'> </div>
                </div>
            }

        </header >

    )
}
