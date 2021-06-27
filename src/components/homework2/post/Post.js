
import {getPosts} from "../services/API";
import {useState} from "react";

export default function Post (props) {
    let {item, selectPost} = props

    let [post, setPost] = useState(null)

    return(
        <div>
            {item.id}<br/>
            Title: {item.title}<br/>
            {item.body}<br/>
            <button onClick={() => {
                selectPost(item.id);
                getPosts(item.id).then(value => setPost(value.data))
            }}>Expand</button><dl/>
        </div>
    )
}