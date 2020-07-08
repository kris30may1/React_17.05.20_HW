import React from 'react';
import { connect } from 'react-redux';
import { addNewTodo, onTitleChange } from '../store/actions';

function TodoForm({ item, addNewTodo, onTitleChange }) {

    function setNewTodo() { 
        console.log(item)
        return {
            id: Date.now(),
            title: item,
            isDone: false
        }
    }

  return (
    <form action=''>
      <label>New Task</label>
          <input
              type='text'
              value={item.title}
              onChange={(e) => onTitleChange(e.target.value)}
          />
      <button
        onClick={() => addNewTodo(setNewTodo(item))}
      >
        Add New Task
      </button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    item: state.title,
  };
}

const mapDispatchToProps = {
  addNewTodo,
  onTitleChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
