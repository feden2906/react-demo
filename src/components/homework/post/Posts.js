
import {useEffect, useState} from "react";
import Post from "./Post";

export default function Posts () {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setPostList(value)
            })
    },[])

    let [postList,setPostList] = useState([])

    return (
        <div>
            {
                postList.map(value => <Post item={value}/>)
            }
        </div>
    )
}


















