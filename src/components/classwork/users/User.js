
import {useEffect, useState} from "react";
import Comment from "../comments/Comment";



export default function User ({item}) {

    let state = useState([]);
    let commentsList = state[0]
    let setCommentsList = state[1]

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                // console.log(value)
                setCommentsList(value)
            })
    },[])


    return (

            <div>
                    User id: {item.id}<br/>
                    Name: {item.name}<br/>
                    Username: {item.username}<br/>
                    Email: {item.email}<br/>
                    Address: {item.address.street} st., {item.address.suite}, {item.address.city}, {item.address.zipcode}<br/>
                    Geolocation: lat {item.address.geo.lat}, lng {item.address.geo.lng}<br/>
                    Comments:<br/>
                    {
                        commentsList.filter(value => value.id == item.id).map(value => <Comment item={value}/>)
                    }
                    <dl/>

            </div>

    )

}