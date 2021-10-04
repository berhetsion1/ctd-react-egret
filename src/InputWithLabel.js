import React,{useEffect,useRef} from "react";


function InputWithLabel(props) { 
    const inputRef = useRef ()
    useEffect(() => {
        if(inputRef.current){inputRef.current.focus()}
    })

  return (
    <>
      <label  htmlFor="todoTitle">{props.children} </label>
      <input 
        ref={inputRef}
        onChange={props.handleTitleChange}
        value={props.todoTitle}
        name="title"
        id="todoTitle">
      </input>
    </>
  );
}

export default InputWithLabel;
