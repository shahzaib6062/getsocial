import React from 'react'
import "./Header.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar } from '@mui/material';
import { useStateValue } from './StateProvider';

function Header() {
  const [{user} , dispatch] = useStateValue();
  return (
    <div>
    <div className='header'>
        <div className='header_left'>
        <FacebookIcon/>
        <SearchIcon/>
        <input type="text"></input>
        </div>
        <div className='header_middle'>
            <HomeIcon />
            <FlagIcon/>
            <SubscriptionsIcon/>
            <StorefrontIcon/>
            <AccountCircleIcon/>
        </div>
        <div className='header_right'>
            <Avatar src={user.photoURL}/>
            <p>{user.displayName}</p>
            <ChatIcon/>
            <AddIcon/>
            <NotificationsActiveIcon/>
        </div>
    </div>
    </div>
  )
}

export default Header
