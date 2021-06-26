
export default function User (props) {
    let {item} = props
    return (
        <div>
            {item.name},username: {item.username}<br/>
            Email: {item.email}<br/>
            Address: {item.address.street} street, {item.address.suites}, {item.address.city}, {item.address.zipcode}<br/>
            Geolocation: lat. {item.address.geo.lat}, lng. {item.address.geo.lng}
        </div>
    )

}