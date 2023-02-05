import React from 'react'
import "./Header.css"
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
        <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-logo-png-transparent-svg-vector-bie-supply-16.png" className='header_left_icon'/>
        <div className='header_searchfield'>
        <SearchIcon/>
        <input type="text"></input>
        </div>
        </div>
        <div className='header_middle'>
            <HomeIcon className='header_middle_icon' />
            <FlagIcon className='header_middle_icon' />
            <SubscriptionsIcon className='header_middle_icon' />
            <StorefrontIcon className='header_middle_icon' />
            <AccountCircleIcon className='header_middle_icon' />
        </div>
        <div className='header_right'>
            <div className='header_profile'>
            <Avatar src={user.photoURL}/>
            <p>{user.displayName}</p>
            </div>
            <ChatIcon className='header_right_icon'/>
            <AddIcon className='header_right_icon'/>
            <NotificationsActiveIcon className='header_right_icon'/>
        </div>
    </div>
    </div>
  )
}

export default Header
