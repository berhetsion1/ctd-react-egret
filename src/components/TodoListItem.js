import React from "react";
import style from './TodoListItem.module.css'
import PropTypes from 'prop-types'
function TodoListItem({ todo, onRemoveTodo }) {
  console.log({ todo });
  return (
    <div>
      <li className={style.ListItem} >
      <span className={ todo.fields.completed===true? style.CompletedListItem:''}>
      {todo.fields.Title}
      </span>
        <button
        className={style.RmvButton}
        type="button" onClick={() => onRemoveTodo(todo.id)} >
        </button>
      </li>
    </div>
  );
}
TodoListItem.prototype = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func
}
export default TodoListItem;

