import TodoButton from "./TodoButton.jsx";

function TodoCreate() {
    return (
        <>
            <div>
                <input type="text"/>
                <TodoButton text={'추가'}/>
            </div>
        </>
    )
}

export default TodoCreate