import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function Todo({ todos }) {

    return (
      <div>
            <TodoList todos={todos}/>    
            <TodoForm />
      </div>
    );
}

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
