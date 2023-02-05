import React from 'react'
import SideBarComp from './SideBarComp'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useStateValue } from './StateProvider';


function SideBar() {
  const [{user} , dispatch] = useStateValue();
  return (
    <div>
      <SideBarComp imgsrc={user.photoURL}
        title={user.displayName}
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
