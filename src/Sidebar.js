import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">             
              <div className="sidebar_top">
                  <img src="https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                  <Avatar src={user.photoUrl} className="sidebar_avatar">
                      {user.email[0]}
                  </Avatar>
                  <h2>{user.displayName}</h2>
                  <h4>{user.email}</h4>
              </div>
              <div className="sider_stats">
                  <div className="sidebar_stat">
                      <p>Who View you</p>
                      <p className="sidebar_statNumber">222.45</p>
                  </div>
                  <div className="sidebar_stat">
                      <p>View on post</p>
                      <p className="sidebar_statNumber">1441.45</p>
                  </div>
              </div>
              <div className="sidebar_button">
                  <p>Recent</p>
                  {recentItem('Reactjs')}
                  {recentItem('Programmer')}
                  {recentItem('Asp.net')}
                  {recentItem('Webdeveloper')}
                  {recentItem('Java spring')}
                  {recentItem('Software eneering')}
                  {recentItem('Fullstack')}
                  {recentItem('IOS developer')}
                  {recentItem('Android developer')}
                  

              </div>
        </div>
    )
}

export default Sidebar
