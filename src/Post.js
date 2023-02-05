import { Avatar } from '@mui/material'
import React from 'react'

function Post({avatarSrc,profileName,timeStamp,message,imgSrc}) {
  return (
    <div>
        <Avatar src={avatarSrc}/>
        <p>{profileName}</p>
        <p>{timeStamp}</p>
        <p>{message}</p>
        <img src={imgSrc}/>
    </div>
  )
}

export default Post
