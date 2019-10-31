import React, { useState } from 'react'
import { Container, TextField, List, ListItem } from '@material-ui/core'

const Todos = () => {

  const [todos, setTodos] = useState([
    { text: "Todo 1", done: false },
    { text: "Todo 2", done: false },
    { text: "Todo 3", done: false }
  ])

  const [todo, setTodoValue] = useState('')

  const addTodo = e => {
    e.preventDefault()
    if(todo === '') return false
    const newTodos = [...todos, { text: todo }]
    setTodos(newTodos)
    setTodoValue('')
  }

  const checkTodo = index => {
    const todoList = [...todos]
    todoList[index].done = !todoList[index].done
    setTodos(todoList)
  }

  return(
    <>
      <Container>
        <form onSubmit={addTodo}>
        <TextField value={ todo } onChange={ e => setTodoValue(e.target.value) } />
        </form>
        <List>
        { todos.map((todo, index) => (
          <ListItem
            key={ index }
            style={{ textDecoration: todo.done && "line-through" }}
            onClick={ () => checkTodo(index) }
            >
            { todo.text }
          </ListItem>
        ))}
        </List>
      </Container>
    </>
  )
}


export default Todos
