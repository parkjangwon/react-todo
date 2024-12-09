import TodoCreate from './TodoCreate.jsx'
import TodoButton from './TodoButton.jsx'
import { useState } from 'react'

function TodoList() {
  const [list, setList] = useState([])
  const addTodoItem = todo => {
    setList([...list, todo])
  }
  return (
    <>
      <div>
        <ul>
          {list.map((todo, index) => (
            <li key={index}>
              <label>
                <input type=' checkbox' />
                <span></span>
                <span>{todo}</span>
                <TodoButton text={'삭제'} />
              </label>
            </li>
          ))}
        </ul>
        <TodoCreate addTodoItem={addTodoItem} />
      </div>
    </>
  )
}

export default TodoList
