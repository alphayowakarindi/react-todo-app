import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prefer-stateless-function
class TodosList extends React.Component {
  render() {
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.isRequired,
  handleChangeProps: PropTypes.isRequired,
  deleteTodoProps: PropTypes.isRequired,
  setUpdate: PropTypes.isRequired,
};

export default TodosList;
