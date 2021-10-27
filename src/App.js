import React from 'react';
import TodoList from "./TodoList";
import AddTodoform from "./AddTodoForm";
// function useSemiPersistentState() {
//   const [todoList, setTodoList] = useState(
//     localStorage.getItem('savedTodoList') ? JSON.parse(localStorage.getItem('savedTodoList')) : []
//   );
//   useEffect(() => {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//   }, [todoList]);
//   return [todoList, setTodoList];
// }
function App() {
  const [todoList, setTodoList] = React.useState([]);
const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) } }),2000);
    })
      .then((result) => {
        setTodoList(result.data.todoList)
        setIsLoading(false);
      })
  }, []);
  React.useEffect(() => {
    if (!isLoading){
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }
  }, [todoList,isLoading]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };
  function removeTodo(id) {
    const newTodoList = todoList.filter(function (item) {
      return item.id !== id
    })
    setTodoList(newTodoList)
  };
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoform onAddTodo={addTodo} />
{isLoading? (<p>Loading...</p>):( <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
)}
    </>
  );
}
export default App;