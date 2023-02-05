import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'

function Login() {
  const [state, dispatch] = useStateValue();

    const loginFun = () => {
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
            });
            console.log(result.user)
        }).catch((error)=>{alert(error.message)})
    }
  return (
    <div>
    shahzaib
      <Button onClick={loginFun}>login</Button>
    </div>
  )
}
 
export default Login
