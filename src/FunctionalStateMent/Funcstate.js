import React from 'react';

export default class classTodo extends React.Component {
  state = { todo: '', warning: null };

  handleTodo = (e) => {
    const updatedTodo = e.target.value;
    const updatedwarning = updatedTodo.includes('.js')
      ? 'Before complete this project you must need about JavaScript. Do you have it ?'
      : null;

    this.setState({
      todo: updatedTodo,
      warning: updatedwarning,
    });
  };

  render() {
    const { todo, warning } = this.state;
    return (
      <div>
        <p>{todo}</p>
        <p>
          <input type="text" value={todo} onChange={this.handleTodo} />
        </p>
        <p>{warning || 'Good Job'}</p>
      </div>
    );
  }
}
