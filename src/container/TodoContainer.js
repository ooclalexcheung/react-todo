import {connect} from "react-redux";
import Todos from "../components/Todos.js"

const mapStateToProps = state =>({ 
  todos: state.todos,
  checked: state.isOnlyActive
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (todo) =>{
    let status
    if (todo.status==="completed"){
      status = "active"
    }
    else
    {
      status = "completed"
    }
    fetch("http://localhost:8080/api/todos/" + todo.id, {
      mode: 'cors',
      method: 'PUT', 
      body: JSON.stringify({
        "content": todo.content,
        "status" : status,
        "id": todo.id
      }),
      headers: new Headers({ 'Content-Type': 'application/json'})
    })
    .then(res=>res.json())
    .then(res=>dispatch({
      type: "TOGGLE_TODO",
      payload: {
          id:res.id, 
          status:res.status, 
          content:res.content
      }
    }))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Todos);