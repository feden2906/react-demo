export default function Post ({item}) {

    return (
        <div>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.body}</div>
            <dl/>
        </div>
    )
}