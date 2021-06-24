import {useEffect, useState} from "react";

export default function Comments () {

    let state = useState([]);
    let commentsList = state[0]
    let setCommentsList = state[1]

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setCommentsList(value)
            })
    },[])


    return(
        <div>
            {
                commentsList.map(value => <div>Post: {value.id} - {value.name}<br/>
                    email: {value.email}<br/>
                    {value.body}<dl/>
                </div>)



            }
        </div>
    );
}