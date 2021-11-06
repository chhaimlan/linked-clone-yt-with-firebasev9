import React from 'react';
import "./Header.css";
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { BusinessCenter, Chat, NotificationImportant, SupervisorAccount } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import {  signOut } from "firebase/auth";


function Header() {

    const user = useSelector(selectUser);
    const authapp = auth;
    const dispatch = useDispatch();
    const loggoutApp = () => {
        dispatch(logout())                
      // auth.signOut();
      signOut(authapp);

        

    };
    return (
        <div className="header">
             <div className="header_left">
                   <img src="data:image/png;base64,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" alt="" />
                   <div className="header_search">
                         <SearchIcon />
                         <input placeholder="Search" type="text" />
                   </div>
             </div>
            <div className="header_right">
              <HeaderOption Icon={HomeIcon} title="Home"/>              
              <HeaderOption Icon={SupervisorAccount} title="MyNetwork"/>
              <HeaderOption Icon={BusinessCenter} title="Job"/>
              <HeaderOption Icon={Chat} title="Messaging"/>
              <HeaderOption Icon={NotificationImportant} title="Notification"/>
              <HeaderOption avatar={true}
              title="Me"
              onClick={loggoutApp}
              />              

            </div>
        </div>
    )
}

export default Header
