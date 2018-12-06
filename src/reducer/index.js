const initialState = {
    todos : [],
    isOnlyActive: false
}

export default (state = initialState, action) =>{
    switch(action.type){
    case "ADD_TODO":
        
        return {todos: [...state.todos, action.payload]};
    case "TOGGLE_TODO":
		let result = state.todos.map(todo => {
			if (todo.id === action.payload.id)
				return action.payload
			else
				return todo
		})
        return {todos:result}
    case "SET_FILTER":{
        return {
            ...state,
            isOnlyActive: action.payload
        }
    }
	

    default:
        return state;
    }


}