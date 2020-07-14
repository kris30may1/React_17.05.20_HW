import React from 'react';
import { connect } from 'react-redux';
import { saveTodo, titleChange } from '../store/actions';

function TodoForm({ item, onSave, onChange }) {
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
              value={item.title}
              onChange={handleChanges}
          />
      <button
        onClick={() => onSave(item)}
      >
        Add New Task
      </button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    item: state.formItem,
  };
}

const mapDispatchToProps = {
  onSave: saveTodo,
  onChange: titleChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
