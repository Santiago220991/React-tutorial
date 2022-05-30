/* eslint react/prop-types: 0 */
import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
        {' '}
        {todo.title}
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
