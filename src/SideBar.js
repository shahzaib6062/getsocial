import React from 'react'
import SideBarComp from './SideBarComp'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function SideBar() {
  return (
    <div>
      <SideBarComp imgsrc="https://images.unsplash.com/photo-1670272501077-c72d2d42f362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Muhammad shahzaib"
      />
      <SideBarComp Icon={LocalHospitalIcon}
      title="Covid-19 Information Center"
      />
      <SideBarComp Icon={EmojiFlagsIcon}
      title="Pages"
      />
      <SideBarComp Icon={GroupIcon}
      title="Friends"
      />
      <SideBarComp Icon={MessageIcon}
      title="Messenger"
      />
      <SideBarComp Icon={StorefrontIcon}
      title="Marketplace"
      />
      <SideBarComp Icon={ VideoLibraryIcon}
      title="Videos"
      />
      <SideBarComp Icon={KeyboardArrowDownIcon}
      title="More" 
      />
    </div>
  )
}

export default SideBar
