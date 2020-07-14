import React from 'react';
import { connect } from 'react-redux';
import { saveTodo, titleChange } from '../store/actions';

function TodoForm({ todo, onSave, onChange }) {
  function handleChanges(e) {
    const changes = {
        title: e.target.value
    };
    onChange(changes);
}

  return (
    <form action=''>
      <label>New Task: </label>
          <input
              type='text'
              value={todo.title}
              onChange={handleChanges}
              placeholder='Create new todo...'
          />
      <button
        onClick={e => e.preventDefault() || onSave(todo)}
      >
        Add New Task
      </button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    todo: state.formItem,
  };
}

const mapDispatchToProps = {
  onSave: saveTodo,
  onChange: titleChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
