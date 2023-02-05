import { Avatar } from '@mui/material'
import React from 'react'


function Post({ profilePic,username, timestamp, message,  image}) {

  return (
    <div>
        <Avatar src={profilePic}/>
        <p>{username}</p>
        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        <p>{message}</p>
        <img src={image}/>
    </div>
  )
}

export default Post
