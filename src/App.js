
import {useEffect, useState} from "react";
import {getPosts} from "./components/homework2/services/API";
import Posts from "./components/homework2/post/Posts";


export default  function App() {

  let [posts,setPosts] = useState([])


  useEffect(() => {
    getPosts().then(response => {
      setPosts([...response.data])
    })
  },[])


  return (
    <div>

      <Posts posts={posts} />
      <hr/>

    </div>
  );
}

