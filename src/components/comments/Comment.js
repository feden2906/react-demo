export default function Comment ({item}) {

    return (
        <div>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.body}</div>
            <dl/>
        </div>
    )
}