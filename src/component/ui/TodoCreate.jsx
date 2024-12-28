import { useEffect, useRef, useState } from 'react'
import TodoButton from './TodoButton.jsx'

import PropTypes from 'prop-types'

function TodoCreate({ addTodo }) {
  const [listName, setListName] = useState('')
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  const handleSubmit = event => {
    event.preventDefault()
    if (listName.trim() !== '') {
      addTodo(listName)
      setListName('')
      inputRef.current.focus()
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className='create-todo'
          style={{ borderBottom: '1px solid #ddd', paddingBottom: '8px', marginBottom: '8px' }}
        >
          <input
            className='todo-input block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            type='text'
            name={'listName'}
            placeholder={'할 일을 적어주세요.'}
            value={listName}
            ref={inputRef}
            onChange={event => setListName(event.target.value)}
          />
          <TodoButton className='todo-button' text={'추가'} />
        </div>
      </form>
    </>
  )
}

TodoCreate.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default TodoCreate
