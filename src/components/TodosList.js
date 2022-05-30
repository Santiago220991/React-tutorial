/* eslint react/prop-types: 0 */
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos, handleChangeProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} />
        ))}
      </ul>
    );
  }
}

export default TodosList;
