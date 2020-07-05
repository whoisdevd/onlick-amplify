import React, { useContext, useState } from 'react';
import { Link as RouterLink, Redirect } from "react-router-dom";
import { AuthContext } from '../../App';
import { Auth } from 'aws-amplify';

function Logout(props) {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const [isLogoutSuccessful, setIsLogoutSuccessful] = useState(false);
  
  setTimeout(async () => {
    await Auth.signOut();
    setIsLogoutSuccessful(true);
    setAuthUser(null);
  }, 1000);
  
  if (isLogoutSuccessful) {
    return <Redirect to="/" />;
  }

  return <div>Loging out.....</div>
}

export default Logout;