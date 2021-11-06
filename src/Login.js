import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
    const authapp = auth;
//     const loginToapp =  (e) => {
//         e.prevetDefault();
    
//         signInWithEmailAndPassword(authapp, email, password)           
//         .then(userAuth => {
//             dispatch(login({
//                 email: userAuth.user.email,               
//                uid: userAuth.user.uid,
//                 displayName: userAuth.user.displayName,
//                 profileUrl: userAuth.user.photoURL,                
//             }));
//         })
//        .catch((error) => alert(error));
//        console.log(dispatch(login())) ;  
// };
const loginToapp = async (e) => {
   e.prevetDefault();
    
 signInWithEmailAndPassword(authapp, email, password)
  .then((userCredential) => {
      dispatch(login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
          profileUrl: userCredential.user.photoURL,
      }));
    
  })
  .catch((error) => alert(error));  
  
} 

    
    
    const register =  () => {
     
            if(!name){
                return alert("Please enter a full name")
            }
           
        
            //auth.createUserWithEmailAndPassword(email, password).then(
              createUserWithEmailAndPassword(authapp,email, password)
          
            //     updateProfile(authapp.currentUser, {
            //     displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
            //   })
              
              
            .then(
                (userAuth) =>{                   
                       userAuth.user.reload({                                                
                        //updateProfile in not a function(error just find a solution more)
                        displayName: name,
                        photoURL: profilePic,
                    })
                  
                    .then(() =>{
                        dispatch(login({
                           email: userAuth.user.email,
                           uid: userAuth.user.uid,
                           displayName: name,
                           photoUrl: profilePic,
                        }));
                    })
                }
            )
            .catch((error) => alert(error));

//     await   createUserWithEmailAndPassword(authapp, email, password)
//        .then((userCredential) => {
//            userCredential.user.reload({
//                displayName: name,
//                photoURL: profilePic,
//            }).then(() =>{
//                dispatch(login({
//                    email: userCredential.user.email,
//                    uid: userCredential.user.uid,
//                    displayName: name,
//                    photoURL: profilePic,
//                }))
//            })
   
//      })
//   .catch((error) => console.log(error));
       
    };   
    return (
        <div className="login">
             <img 
               src="https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix.jpg"
                alt=""
            />
            <form>
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name require if register" type="text" />
                <input  
                 value={profilePic}
                 onChange={(e) =>setProfilePic(e.target.value)}
                 placeholder="Profile picture URL" type="text" />
                <input value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" type="email" />
                <input 
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
                placeholder="Password" type="password" />
                <button onClick={loginToapp}>Sing In</button>
            </form>
            <p>Not a number? <span className="login-register"
              onClick={register}
            >Register now</span> </p>
        </div>
    );
}

export default Login;
