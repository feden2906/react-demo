import Post from "./Post";

export default function Posts ({posts}) {

    return(
        <div>
            {
                posts.map(post => <Post key={post.id} item={post} />)
            }
        </div>
    )
}