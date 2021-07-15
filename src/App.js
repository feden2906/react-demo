import {useSelector} from "react-redux";
import {useEffect} from "react";

const CreateTodoForm = () => {
    return (
        <form>
            <input type="text" placeholder="todo title"/>
            <br/>
            <input type="text" placeholder="todo description"/>
            <br/>
            <button>create todo</button>
        </form>
    )
}

const Todos = () => {

  const fetchTodos = async () => {
    const resp = await fetch('http://localhost:9999/get-todos')
    const data = await resp.json()
  }

  useEffect(() => {
    fetchTodos()
  },[])
  return (
      <div>

      </div>
  )
}


function App() {
    const store = useSelector(store => store)

    console.log(store)
    return (
        <div>
            <CreateTodoForm/>
            <Todos/>
        </div>
    );
}

export default App;
