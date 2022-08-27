import React from 'react';
import './LogIn.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const LogIn = () => {
    const [email,setEmail] =useState('') ;
    const [password,setPassword] = useState('');
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation();
      const from =location.state?.from.pathname || '/'
      if(user){
        navigate(from ,{replace :true});
      }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    
    const handleUserSignin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
        
    }

    return (
        <div className="form-container">
         <div>
        <form onSubmit={handleUserSignin}>
        <h1 className="form-title">Login</h1>
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id=" " required />
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />

        </div>
        <p style={{color: 'red'}}>{error?.message}</p>
        {
            loading && <p>loading...</p>
        }
        <input className="form-submit" type="submit" value="Login" />
        
        </form>
        <p>New to ema-jhon ?? <Link className="form-link" to="/signup">Create an account</Link> </p>
         </div>
        </div>
    );
};

export default LogIn;