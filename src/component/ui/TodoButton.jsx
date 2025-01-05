function TodoButton({ text, onClick }) {
  return (
    <>
      {text === '삭제' ? (
        <button style={{ margin: '10px' }} onClick={onClick}>
          {text}
        </button>
      ) : (
        <button style={{ margin: '10px' }}>{text}</button>
      )}
    </>
  )
}

export default TodoButton
