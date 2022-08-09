
import React, { useState } from 'react'
import Button from './Button'
type TodoProps={
  handleAdd:Function;
}
const TodoInput = ({handleAdd}:TodoProps) => {
    const [value,setValue] = useState<string>("")
   
   
    let Click =()=>{
      handleAdd(value)
    }
   
    
  return (
    <>
    <div>
        <input type="text" placeholder='type...' onChange={(e)=> setValue(e.target.value)}/>
      <Button onClick={Click}>Add</Button> 
        {/* <button onClick={handleClick} >Add</button> */}
    </div>
    
   
 </>
  )
}

export default TodoInput