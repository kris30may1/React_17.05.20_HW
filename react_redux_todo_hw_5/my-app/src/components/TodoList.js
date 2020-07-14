import React from 'react'
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodo } from '../store/actions';
import { connect } from 'react-redux';

function TodoList({ items, deleteTodo, toggleTodo }) {
    return (
      <ul>
        {items.map((item) => (
          <TodoItem
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          key={item.id} item={item} />
        ))}
      </ul>
    );
}

function mapStateToProps(state) {
  return {
      items: state.todos
  };
}

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);
