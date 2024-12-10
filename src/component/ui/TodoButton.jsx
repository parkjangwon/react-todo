import PropTypes from 'prop-types'

function TodoButton({ text, onClick }) {
  return (
    <>{text === '삭제' ? <button onClick={onClick}>{text}</button> : <button>{text}</button>}</>
  )
}

TodoButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default TodoButton
