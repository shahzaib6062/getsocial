import React from 'react'
import { useStateValue } from './StateProvider'
import Story from './Story'

function Stories() {
  const [{user} , dispatch] = useStateValue();
  return (
    <div>
      <Story 
        Image="https://images.unsplash.com/photo-1670272501077-c72d2d42f362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        imgsrc={user.photoURL}
        title={user.displayName}
      />
    </div>
  )
}

export default Stories
