import User from "./User";

export default function Users (props) {
let {items} = props
    return (
        <div>
            {
                items.map(user => <User key={items.id}/>)
            }
        </div>
    )
}