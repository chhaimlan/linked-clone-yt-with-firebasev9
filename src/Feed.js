import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import React,{useState,  useEffect} from 'react'
import "./Feed.css"
import InputOption from './InputOption'
import Post from './Post'
import  {db}  from "./firebase";
import { collection, addDoc,getDocs } from "firebase/firestore"; 
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';



function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts,setPosts] = useState([]);
    const usersCollectionref = collection(db,"posts");
    
  
    useEffect(() => {
        const getUsers =  async () => {       
          const data = await getDocs(usersCollectionref);
             setPosts(data.docs.map((doc) => ({
              //...doc.data(), id: doc.id     
              id: doc.id,
              posts: doc.data(),                   
             }))
             );                             
        };
        getUsers();
   }, [usersCollectionref,input]);
   

    const sendPost = async (e) => {
        e.preventDefault();
        await addDoc(usersCollectionref, {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl:user.photoUrl || "",  
            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),         
        });
             
     setInput("");
        
    // try {
    //     const docRef = await addDoc(usersCollectionref, {
    //                    name: 'Lan Chhaim',
    //                    description: 'this is a test',
    //                    message: input,
    //                   photoUrl:'',
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    }
   
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                         <input value={input} onChange={e =>setInput(e.target.value)} type="text" />
                         <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
              <div className="feed_inputOptions">
                    <InputOption  Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption  Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption  Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption  Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
              </div>      
            </div>
          <FlipMove>
            {posts.map(({id, posts: {name, description, message,photoUrl} }) =>(
                   <Post key={id}
                         name={name}
                         description={description}
                         message ={message}
                         photoUrl={photoUrl}                         
                   />       
            ))}   
          </FlipMove>                  
        </div>
    );
}

export default Feed;
