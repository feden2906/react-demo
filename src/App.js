import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {

  return (
      <Router>
        <div>
            <div><Link to='/'>Home page</Link></div>
            <div><Link to='/users'>Users</Link></div>
            <div><Link to='/posts'>Posts</Link></div>
            <div><Link to='/comments'>Comments</Link></div>


                <Route path={'/'} exact render={() => {
                return <div>Home</div>
                }}/>
                <Route path={'/users'} render={(props) => {
                    return <Users/>
                }}/>
                <Route path={'/posts'} render={(props) => {
                    return <Posts/>
                }}/>
                <Route path={'/comments'} render={(props) => {
                    return <Comments/>
                }}/>


        </div>
      </Router>
  );
}

export default App;
