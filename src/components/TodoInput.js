import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class TodoInput extends Component {
  /*
  addNewTodo = newTodo => {
    this.props.dispatch({
      type: "ADD_TODO",
      payload: newTodo
    
  });
}
*/

  onAdded = () => {
    const {input} = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''
  }
  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onAdded}>add</button>
      </div>
    )
  }
}


