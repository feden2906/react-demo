import {useEffect, useState} from "react";
import {getPosts} from "../services/API";
import Post from "./Post";

export default function Posts () {

    let [posts,setPosts] = useState([])

    useEffect(() => {
        getPosts().then(response =>
            setPosts(response.data))
    })

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    )
}