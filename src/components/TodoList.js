import React from "react";
import style from './TodoList.module.css';
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'
function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div>
      <ul className={style.unorderedTodoList}>
        {todoList.map( function(todo) {
          return (
          <TodoListItem
              key={todo.id}
              todo={todo}
              onRemoveTodo={onRemoveTodo}
               />
          )
        })}
      </ul>
      </div>
  );
}
TodoList.prototype = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
}
export default TodoList;