export default function User ({item}) {

    return (
        <div>
            <div>{item.id} - {item.name}</div>
            <div>{item.username} - {item.email}</div>
            <div>
                Address:
                <div>{item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</div>
            </div>
            <div>
                Geolocation
                <div>Lat: {item.address.geo.lat}, Lng: {item.address.geo.lng}</div>
            </div>
            <dl/>
        </div>
    )
}