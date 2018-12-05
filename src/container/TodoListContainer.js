
import { connect } from 'react-redux';
import TodoList from '../components/TodoList.js'

const mapStateToProps = state =>({
  todos: state.todos 
})

export default connect(mapStateToProps)(TodoList)