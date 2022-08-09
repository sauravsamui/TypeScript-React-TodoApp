import React from 'react'
import { Todo } from '../action'
type TodoListProps={
  data:Todo[]
}
const TodoList = ({data}:TodoListProps) => {
  return (
    <div>
      {data.map((el)=>(
        <div>{el.value}-{el.isCompleted?"done":"not done"}</div>
      ))}
    </div>
  )
}

export default TodoList