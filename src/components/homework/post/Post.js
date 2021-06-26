


export default function Post ({item:{userId,id,title,body}}) {



    return (
        <div>
            User Id: {userId}<br/>
            ID: {id}<br/>
            Title: {title}<br/>
            {body}<dl/>
        </div>
    )
}