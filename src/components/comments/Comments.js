import {useEffect, useState} from "react";
import {getUsers} from "../services/API";
import Comment from "./Comment";

export default function Comments () {

    let [comments,setComments] = useState([])

    useEffect(() => {
        getUsers().then(response =>
            setComments(response.data))
    })

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    )
}