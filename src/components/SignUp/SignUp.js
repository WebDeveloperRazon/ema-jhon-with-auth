import React from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [email,setEmail] =useState('') ;
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error ,setError] =useState('') ;
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword , user] =useCreateUserWithEmailAndPassword(auth);
    if(user){
        navigate('/shop')
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Password did not match');
            return;
        }
        if(password.length<6){
            setError('Password must be at least 6 characters or longer') ;
            return ;
        }
        createUserWithEmailAndPassword(email, password);
       
    }
    return (
        <div className="form-container">
         <div>
        <form onSubmit={handleCreateUser}>
        <h1 className="form-title">Sign up</h1>
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id=" " onBlur={handleEmailBlur} required/>
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" onBlur={handlePasswordBlur} required/>

        </div>
        <div className="input-group">
            <label htmlFor="confirm-password"> Confirm Password</label>
            <input type="password" name="confirm-password" id="" onBlur={handleConfirmPasswordBlur} required />

        </div>
        <p style={{color:'red'}}>{error}</p>
        <input className="form-submit" type="submit" value="Sign up" />
        </form>
        <p>Already have an account ?? <Link  className="form-link" to="/login">Login</Link> </p>
         </div>
        </div>
    );
};

export default SignUp;