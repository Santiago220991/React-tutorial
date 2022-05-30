/* eslint react/prop-types: 0 */
import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input type="checkbox" />
        {' '}
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;
