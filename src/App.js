
import './App.css';
import Post from "./components/post/Post";

import {useEffect, useState} from "react";








function App() {

  let [postList,setPostList] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
          console.log(value)
          setPostList(value)
        })
  },[])

  return (
    <div>
      {
        postList.map(value => <Post item={value}/>)
      }
    </div>
  );
}

export default App;
