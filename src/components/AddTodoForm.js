import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from './AddTodoForm.module.css'
import PropTypes from 'prop-types'

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle);
  };
  function handleAddTodo(event) {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({fields: { Title: todoTitle }});
    setTodoTitle("");
  }
  return (
    <div className={style.inputLabel} >
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title:
        </InputWithLabel>
        &nbsp;
        <button className={style.addBtn} type="submit">
        {/* <AddBoxIcon  fontSize='medium'/> */}
        add
        </button>
      </form>
    </div>
  );
}
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func
}
export default AddTodoForm;