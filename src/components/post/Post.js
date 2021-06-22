import {useEffect, useState} from "react";

export default function Post () {

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
            postList.map(value =>
                <div>
                    User Id: {value.userId}<br/>
                    Post number: {value.id}<br/>
                    {value.title}<br/>
                    {value.body}<dl/>
                </div>
            )
        }
        </div>
    )
}


















