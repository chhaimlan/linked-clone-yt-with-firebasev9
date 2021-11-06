
import React,{useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
//import { useDispatch } from 'react-redux';
import './App.css';
import {login, logout, selectUser} from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Sidebar from './Sidebar';


import { onAuthStateChanged } from "firebase/auth";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(selectUser);
  const authapp = auth;
   useEffect(() => {
      onAuthStateChanged(authapp,  (userAuth) => {
        if(userAuth){
           //user is logged in
           dispatch(login({
             email: userAuth.email,             
             uid: userAuth.uid,
             displayName: userAuth.displayName,
             photoUrl: userAuth.photoURL
           }));
        }else{
             //user is logged out
             dispatch(logout());
        }
      });
   }, [authapp, dispatch])

  

  return (
    <div className="App">      
      <Header />  
      {!user ? <Login /> : (
         <div className="app_body">
            <Sidebar />
             <Feed />
             <Home/>
           </div>
      )}            
    </div>
  );
}

export default App;
