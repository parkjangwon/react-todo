import { useEffect } from 'react'

function TodoHeader() {
  useEffect(() => {
    document.body.classList.add('light')
  }, [])
  const toggleTheme = () => {
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
  }
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
