import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
import './style.css'

export const LoginPage = ({ history }) => {

    const { dispatch } = useContext( AuthContext )

    const handleLogin = () => {
        // history.push('/');
        // history.replace('/');

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Alfred'
            }
        });

        history.replace( lastPath );
    }

    return (
        <div className="login-container text-center">
            <div className="form-signin">
                <img 
                    className="rounded mb-4" 
                    src={ window.location.origin + '/assets/logo-login.jpg' }  
                    alt="logo" 
                    width="150" 
                    height="150"
                />
                <h1 className="h3 mb-3 font-weight-normal">Heroes Login</h1>
                    
                <input 
                    type="email"
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Email address" 
                    required 
                />
                
                <input 
                    type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Password" 
                    required 
                />
                <div className="checkbox mb-3">
                    <label>
                        <input 
                            type="checkbox" 
                            value="remember-me" 
                        /> 
                                Remember me
                    </label>
                </div>
                    <button 
                        className="btn btn-lg btn-dark btn-block" 
                        type="submit"
                        onClick={ handleLogin }
                    >
                            Sign in
                        </button>
                    <p className="red mt-5 mb-3">&copy; 2020-2021</p>
            </div>
        </div>
    )
}
