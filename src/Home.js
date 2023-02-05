import React , {useState,useEffect} from 'react'
import Header from "./Header"
import MessageSender from './MessageSender'
import Post from './Post'
import SideBar from './SideBar'
import Stories from './Stories'
import Widget from './Widget'
import db from "./firebase"

function Home() {
  const [posts , setPosts] = useState([])
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  },[]);
  return (
    <div>
      <Header/>
      <SideBar/>
      <Stories/>
      <MessageSender/>
      {posts.map((post) => (
        <Post
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}/>
      ))}
      <Widget/>
    </div>
  )
}

export default Home
