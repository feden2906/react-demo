

export default function Comment ({item:{id,name,email,body}}) {



    return(
        <div>
            {
                <div>Post: {id} - {name}<br/>
                    email: {email}<br/>
                    {body}<dl/>
                </div>
            }
        </div>
    );
}