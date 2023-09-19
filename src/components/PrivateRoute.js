import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({isLoggedIN, children}) => {

if(isLoggedIN) {
    return children;
}
else {
  return <Navigate to ="/login"/>
}
  
}

export default PrivateRoute