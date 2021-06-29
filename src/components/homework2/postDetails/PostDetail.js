export default function PostDetail ({post1,item} ) {

    return(
        <div>
            {
                post1.filter(value => value.id === item.id).map(value => <div>{value.id}--{value.body}</div>)
            }
        </div>
    )
}