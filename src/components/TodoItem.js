import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo, deleteTodoProps, handleChangeProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodoItem;
