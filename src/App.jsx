import { useEffect, useState } from "react"
import TodoInput from "./components/todoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({ todos: newList })) // saves data in local host even after after deletion
  }

  function handleAddNewTodos(newTodos){
    const newTodoList = [...todos, newTodos] // ..todos -> creates a new array with a new reference.
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todos, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }
  
  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <main>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddNewTodos = {handleAddNewTodos} />
      <TodoList handleEditTodos = {handleEditTodos} handleDeleteTodos = {handleDeleteTodos} todos = {todos}/>
    </main>
  )
}

export default App
