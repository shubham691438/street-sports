import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Box } from '@mui/material'

const Profile = () => {
  const {user}=useAuthContext()
  const [msg,setMsg]=useState()

  useEffect(()=>{

    const fetchProfile=async()=>{
      const res=await fetch('/api/user/profile',{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })

      const data= await res.json() 
      setMsg(data.msg);

      //  if(res.ok)
      //  {
        
      //  }
      }

    if(user)
    {
      fetchProfile()
    }
    else
    {
      setMsg(null)
    }

  },[user])

  return (
    <Box color='white'>
      <h1>Profile</h1>
      {
        console.log(msg)
      }
      <p>{msg}</p>
    </Box>
  )
}

export default Profile