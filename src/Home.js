import React from 'react'
import Header from "./Header"
import MessageSender from './MessageSender'
import Post from './Post'
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
      <Post avatarSrc="https://images.unsplash.com/photo-1673808516112-e63ec132a623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      profileName="Shahzaib"
      timeStamp="timeStamp..."
      message="This is a message"
      imgSrc="https://images.unsplash.com/photo-1670272501077-c72d2d42f362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Widget/>
    </div>
  )
}

export default Home
