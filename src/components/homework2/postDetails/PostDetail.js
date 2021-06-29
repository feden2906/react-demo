export default function PostDetail ({post1}) {





    return(
        <div>
            {


                post1.map(value => <div>{value.body}</div>)
            }
        </div>
    )
}