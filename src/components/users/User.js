export default function User ({item}) {

    return (
        <div>
            <div>{item.id} - {item.name}</div>
            <div>{item.username} - {item.email}</div>
            <dl/>
        </div>
    )
}