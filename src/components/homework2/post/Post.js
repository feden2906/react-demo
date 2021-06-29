
import {getPosts} from "../services/API";
import {useState} from "react";
import PostDetail from "../postDetails/PostDetail";

export default function Post ({item}) {

    let [post, setPost] = useState([])

    return(
        <div>
            {item.id}--- Title: {item.title}<br/>
            <button onClick={() => {
                getPosts(item.id).then(value => setPost([...value.data]) )
            }}>Expand</button>
            <br/>
            <PostDetail post1={post} item={item}/>
            <dl/>
        </div>
    )
}