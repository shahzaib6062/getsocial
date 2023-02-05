import { Avatar, Icon } from '@mui/material'
import React from 'react'

function sideBarComp({imgsrc ,Icon,title}) {
  return (
    <div>
      {imgsrc && <Avatar src={imgsrc}/>}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  )
}

export default sideBarComp
