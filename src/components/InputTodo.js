/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      e.preventDefault();
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input className="input-text" type="text" placeholder="Add Todo..." value={title} onChange={this.onChange} />
        <button className="input-submit" type="submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
