import React, { Component } from 'react';
import TodoListContainer from '../container/TodoListContainer'
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <TodoListContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({


});




export default connect(mapStateToProps)(App);

