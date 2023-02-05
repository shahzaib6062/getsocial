import { Avatar } from '@mui/material'
import React from 'react'

function Story({Image , imgsrc , title}) {
  return (
    <div style={{backgroundImage: `url(${Image})` }}>
      <Avatar src={imgsrc}/>
      <p>{title}</p>
    </div>
  )
}

export default Story
