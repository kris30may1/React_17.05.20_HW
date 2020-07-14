import React from 'react'
import TodoItem from './TodoItem';
import { deleteTodo } from '../store/actions';
import { connect } from 'react-redux';

function TodoList({ items, deleteTodo }) {
    return (
      <ul>
        {items.map((item) => (
          <TodoItem
          deleteTodo={deleteTodo}
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
};

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);
