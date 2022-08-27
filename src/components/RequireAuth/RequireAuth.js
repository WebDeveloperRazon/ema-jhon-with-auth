import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate ,useLocation } from 'react-router-dom';

import './RequireAuth.css'
import auth from './../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(!user){
        return <Navigate to='/login' state ={{from: location}} replace ></Navigate>
    }
    return children ;
};

export default RequireAuth;