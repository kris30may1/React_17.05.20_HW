import React from 'react'
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodo } from '../store/actions';
import { connect } from 'react-redux';

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          key={todo.id} todo={todo}
          />
        ))}
      </ul>
    );
}

function mapStateToProps(state) {
  return {
      todos: state.todos
  };
}

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);
