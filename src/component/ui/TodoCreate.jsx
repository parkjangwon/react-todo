import { useState } from 'react'
import TodoButton from './TodoButton.jsx'

import PropTypes from 'prop-types'

function TodoCreate({ addTodo }) {
  const [listName, setListName] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    if (listName.trim() !== '') {
      addTodo(listName)
      setListName('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name={'listName'}
            placeholder={'할 일을 적어주세요.'}
            value={listName}
            onChange={event => setListName(event.target.value)}
          />
          <TodoButton text={'추가'} />
        </div>
      </form>
    </>
  )
}

TodoCreate.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default TodoCreate
