import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

function MessageSender() {
    const [inputMsg , setInputMsg] = useState("");
    const [inputUrl , setInputUrl] = useState("");
    function OnSubmtit(e){
        e.preventDefault();
        setInputMsg("")
        setInputUrl("")
    }

  return (
    <div>
      <form>
        <Avatar/>
        <input type="text" placeholder="What's in your mind?" value={inputMsg} onChange={(e)=>{setInputMsg(e.target.value)}}/>
        <input type="text" placeholder="Enter URL here" value={inputUrl} onChange={(e)=>{setInputUrl(e.target.value)}}/>
        <button type='submit' onClick={OnSubmtit}>Click</button>
      </form>
        <VideocamIcon/>
        <p>Live Video</p>
        <PhotoLibraryIcon/>
        <p>Photo/Video</p>
        <SentimentDissatisfiedIcon/>
        <p>Feeling/Activity</p>
    </div>
  )
}

export default MessageSender
