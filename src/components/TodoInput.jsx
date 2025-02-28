import { useState } from "react"

export default function TodoInput(props){
    const { handleAddNewTodos, todoValue, setTodoValue } = props;
    return(
        <header>
            <input 
                value={todoValue} 
                onChange={(e) => setTodoValue(e.target.value)}
                placeholder="Enter a task.." 
            />
            <button onClick={() => {
                handleAddNewTodos(todoValue);
                setTodoValue(''); 
            }}>
                Add
            </button>
        </header>
    );
}