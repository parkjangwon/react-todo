import { useEffect } from 'react'
import { toggleTheme } from '../../utils/themeUtils.js'

function TodoHeader() {
  useEffect(() => {
    document.body.classList.add('light')
  }, [])

  return (
    <>
      <div>
        <h1>😩 할 일이 많다!</h1>
        <p>그래도 차근 차근 처리합시다.</p>
        <button onClick={toggleTheme}>⚙️ 테마 변경</button>
      </div>
    </>
  )
}

export default TodoHeader
