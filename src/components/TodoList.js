import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'
import { connect } from 'react-redux';
import TodoInputContainer from '../container/TodoInputContainer';

class TodoList extends Component {
  state = {todos: []};
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}
const mapStateToProps = state =>({
  todos: state.todos 
})

export default connect(mapStateToProps)(TodoList)