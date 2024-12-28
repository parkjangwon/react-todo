import { useState } from 'react'
import TodoCreate from './TodoCreate.jsx'
import TodoButton from './TodoButton.jsx'
import { getRandomEmoji } from '../../utils/emojiUtils.js'

function TodoList() {
  const [list, setList] = useState([])
  const [checkedTodo, setCheckedTodo] = useState([])

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
            <li
              className='list-item'
              key={index}
              style={{ borderBottom: '1px solid #ddd', paddingBottom: '8px', marginBottom: '8px' }}
            >
              <label className='list-label ms-2 list-item text-sm font-medium text-gray-400 dark:text-gray-500'>
                {getRandomEmoji()}
                <input
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                  type='checkbox'
                  checked={!!checkedTodo[index]}
                  onChange={() => handleCheckedChange(index)}
                  style={{ margin: '10px' }}
                />
                <span style={{ textDecoration: checkedTodo[index] ? 'line-through' : 'none' }}>
                  {todo}
                </span>
              </label>
              <TodoButton
                className='todo-button'
                text={'삭제'}
                onClick={() => handleDelete(index)}
              />
            </li>
          ))}
        </ul>
        <TodoCreate addTodo={addTodo} />
      </div>
    </>
  )
}

export default TodoList
