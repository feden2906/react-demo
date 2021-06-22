import {useEffect, useState} from "react";


export default function Post (props) {

    let [postList,setPostList] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setPostList(value)
            })
    },[])

    let {item:{userId,id,title,body}} = props


    return (
        <div>
            {
            postList.map(value =>
                <div>
                    {userId}<br/>
                    {id}<br/>
                    {title}<br/>
                    {body}<dl/>
                </div>
            )



        }
        </div>


    )

}


















