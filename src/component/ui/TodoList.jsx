import { useState } from 'react'
import TodoCreate from './TodoCreate.jsx'
import TodoButton from './TodoButton.jsx'
import { getRandomEmoji } from '../../utils/emojiUtils.js'

function TodoList() {
  const [list, setList] = useState([])

  const [checkedTodo, setCheckedTodo] = useState([]) // 체크 박스 상태 저장

  const addTodo = todo => {
    setList([...list, todo])
  }

  const handleDelete = index => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)

    const newCheckedTodos = { ...checkedTodo }

    delete newCheckedTodos[index]
    setCheckedTodo(newCheckedTodos)
  }

  const handleCheckedChange = index => {
    setCheckedTodo({
      ...checkedTodo,
      [index]: !checkedTodo[index],
    })
  }

  return (
    <>
      <div>
        <ul>
          {list.map((todo, index) => (
            <li key={index}>
              <label>
                {getRandomEmoji()}
                <input
                  type='checkbox'
                  checked={!!checkedTodo[index]}
                  onChange={() => handleCheckedChange(index)}
                />
                <span style={{ textDecoration: checkedTodo[index] ? 'line-through' : 'none' }}>
                  {todo}
                </span>
                <TodoButton text={'X'} onClick={() => handleDelete(index)} />
              </label>
            </li>
          ))}
        </ul>
        <TodoCreate addTodo={addTodo} />
      </div>
    </>
  )
}

export default TodoList
