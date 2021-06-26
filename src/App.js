// // POSTS

import {useEffect, useState} from "react";
import {getPosts, getPost} from "./components/homework2/services/API";
import Posts from "./components/homework2/post/Posts";
import PostDetail from "./components/homework2/postDetails/PostDetail";



export default  function App() {

  let [posts,setPosts] = useState([])
  let [postDetails,setPostDetails] = useState(null)

  useEffect(() => {
    getPosts().then(response => {
      setPosts(response.data)
    })
  },[])

  function selectPost (id) {
    getPost(id).then(({data}) => {
      console.log(data)
      setPostDetails(data)})

  }

  return (
    <div>
      <Posts items={posts} selectPost={selectPost}/>
      <hr/>

      {
        postDetails && <PostDetail item={postDetails}/>
      }
    </div>
  );
}

// USERS

// import Users from "./components/classwork2/user/Users";
// import {useEffect, useState} from "react";
//
// export default  function App() {
//
//   let [users, setUsers] = useState([])
//
//
//   useEffect()
//
//
//   return (
//     <div>
//       <Users/>
//     </div>
//   );
// }
//
