/* eslint react/prop-types: 0 */
import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    return (
      <li className={styles.item}>
        <input className={styles.checkbox} type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
        {' '}
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
