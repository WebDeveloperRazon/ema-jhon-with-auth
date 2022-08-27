import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Shipment = () => {
    const [user] =  useAuthState(auth) ;
    const [name ,setName] = useState('')
    const [email,setEmail] =useState('') ;
    const [address,setAddress] = useState('');
    const [number,setnumber] = useState('');
    const [error ,setError] =useState('') ;
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handleNumberdBlur = event => {
        setnumber(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        
      const shipping = {name ,email , address , number} ;
      console.log(shipping)
       
    }
    return (
        <div className="form-container">
         <div>
        <form onSubmit={handleCreateUser}>
        <h1 className="form-title">Shipping Information</h1>
        <div className="input-group">
            <label htmlFor="name"> Name </label>
            <input type="text" name="name" id="" />
        </div>
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id=" " value={user?.email} readOnly required/>
        </div>
        <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" name="Address" id="" onBlur={handleAddressBlur} required/>

        </div>
        <div className="input-group">
            <label htmlFor="phoneNumber"> Phone Number</label>
            <input type="number" name="phoneNumber" id="" onBlur={handleNumberdBlur} required />

        </div>
        <p style={{color:'red'}}>{error}</p>
        <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
        </div>
        </div>
    );
};

export default Shipment;