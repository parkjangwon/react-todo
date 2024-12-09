import PropTypes from 'prop-types';

function TodoButton({ text }) {
    return (
        <>
            <button>{text}</button>
        </>
    )
}

TodoButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default TodoButton