import React from 'react'
import Feed from './Feed'
import Header from "./Header"
import MessageSender from './MessageSender'
import SideBar from './SideBar'
import Stories from './Stories'
import Widget from './Widget'


function Home() {
  
  return (
    <div>
      <Header/>
      <SideBar/>
      <Stories/>
      <MessageSender/>
      <Feed/>
      <Widget/>
    </div>
  )
}

export default Home
