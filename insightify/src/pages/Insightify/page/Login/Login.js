import React from 'react'
import { useNavigate } from 'react-router'
import { Divider, Button } from '../../../../lib'
import './Login.css'

export default function Login() {
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
                
                <Button onClick={(e) => navigate("/")} height={50} width={300}>Sign In</Button>
                
                <div>
                    Don't have an account? <a href='/register'>Sign Up</a>
                </div>
            </form>
        </div>
    )
}
