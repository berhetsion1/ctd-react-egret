import React from 'react'

function AddTodoForm() {
    return (
        <div>
           <form>
               <label>Title: </label>
               <input id= "todoTitle"></input>
               <label htmlFor= "todoTitle"></label>
               <button type="submit">add</button>
            
               
               </form> 
        </div>
    )
}

export default AddTodoForm
