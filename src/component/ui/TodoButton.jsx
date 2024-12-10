import PropTypes from 'prop-types'

function TodoButton({ text, onClick }) {
  return <>{text === 'X' ? <button onClick={onClick}>{text}</button> : <button>{text}</button>}</>
}

TodoButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default TodoButton
