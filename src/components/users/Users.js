import {useEffect, useState} from "react";
import Post from "../post/Post";
import User from "./User";

export default function Users () {

    let [userList,setUserList] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setUserList(value)
            })
    },[])


    return (
        <div>
            {
                userList.map(value => <User item={value}/>)
            }
        </div>
    )
}