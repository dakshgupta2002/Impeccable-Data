import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../elements'
import './Header.css'

export default function Header() {
    return (
        <div className='head'>
            <div className='title'>
                Insightify
            </div>

            <div className='links'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to='/results' className='link'>Results</Link>
                <Link to="/insightify" className='link'>Insightify</Link>
            </div>

            <div>
                <Link className='link login-link' to="/login">Login/Signup</Link>
            </div>
        </div>
    )
}
