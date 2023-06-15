import React from 'react'

import { Link } from "react-router-dom";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import logo from '../Partnership/images/starbucks-logo.svg'

import './Login.css'

export default function Account() {


    return (
        <div>
            <Header />
            <main className='login-content-container'>
                <div className='login-content'>
                    <div className='login-imagebox'>
                        <img src={logo} alt='' />
                    </div>

                    <form className='login-textbox'>

                        <h1> Log In </h1>

                        <input
                            type='text'
                            placeholder='Email Address'
                            required
                        />

                        <input
                            type='password'
                            placeholder='Password'
                            required
                        />

                        <input type='submit' value='Log In' className='submit' />

                        <div className='login-linkbox'>
                            <span> Forgot Password? </span>
                            <Link to='/signUp'> <span> Create an Account </span> </Link>
                        </div>

                    </form>


                </div>
            </main>
            <Footer />
        </div >
    )
}
