import Post from "../post/Post";



export default function User ({item}) {

    let [postList,setPostList] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setPostList(value)
            })
    },[])


    return (

            <div>
                <h3>
                    User id: {item.id}<br/>
                    Name: {item.name}<br/>
                    Username: {item.username}<br/>
                    Email: {item.email}<br/>
                    Address: {item.address.street} st., {item.address.suite}, {item.address.city}, {item.address.zipcode}<br/>
                    Geolocation: lat {item.address.geo.lat}, lng {item.address.geo.lng}<dl/>
                </h3>

                <h4>{
                    postList.map(value =>
                        <div>
                            User Id: {value.userId}<br/>
                            Post number: {value.id}<br/>
                            {value.title}<br/>
                            {value.body}<dl/>
                        </div>
                    )
                }</h4>
            </div>

    )

}