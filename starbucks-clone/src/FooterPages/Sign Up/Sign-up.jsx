import React from 'react'

import { Link } from "react-router-dom";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import logo from '../Partnership/images/starbucks-logo.svg'

import './Sign-up.css'

export default function Account() {


    return (
        <div>
            <Header />
            <main className='signUp-content-container'>
                <div className='signUp-content'>
                    <div className='signUp-imagebox'>
                        <img src={logo} alt='' />
                    </div>

                    <form className='signUp-textbox'>
                        <h1> Sign up </h1>
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

                        <input type='submit' value='Sign Up' className='signUp' />


                        <div className='signUp-linkbox'>
                            <span> Forgot Password? </span>
                            <Link to='/login'> <span> Already have an account? </span> </Link>
                        </div>

                    </form>


                </div>
            </main>
            <Footer />
        </div >
    )
}
