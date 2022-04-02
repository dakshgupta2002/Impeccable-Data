import React from 'react'
import {  Button } from '../../../../lib'
import './Login.css'
import { useNavigate } from 'react-router';

export default function Register() {

    const navigate = useNavigate();

    return (
        <div>
            <form className='login'>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="impeccable@data.com" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="key">Login Secret Key</label>
                    <input type="password" className="form-control" id="key" />
                </div>

                <Button onClick={(e) => navigate("/")} height={50} width={300}>Sign up</Button>
                
                <div>
                    Already have an account? <a href='/login'>Sign In</a>
                </div>
            </form>
        </div>
    )
}
