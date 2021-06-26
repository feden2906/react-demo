import PostDetail from "../postDetails/PostDetail";
import {getPost} from "../services/API";
import {getPostsId} from "../../homework2/services/API";
import Posts from "./Posts";
import {useState} from "react";

export default function Post (props) {
    let {item, selectPost} = props

    let [post, setPost] = useState(null)


    return(

        <div>
            {/*{item.id}<br/>*/}
            Title: {item.title}<br/>
            {/*{item.body}<br/>*/}
            <button onClick={() => {

                selectPost(item.id);
getPostsId(item.id).then(value => setPost(value.data))


            }}>Expand</button><dl/>
            {
                // <Posts items={post} />
            }
        </div>

    )
}