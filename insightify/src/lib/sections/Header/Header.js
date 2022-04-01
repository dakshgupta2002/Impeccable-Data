import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to='/insights' className='link'>Insights</Link>
            </div>
        </div>
    )
}
