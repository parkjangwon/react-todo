import TodoCreate from "./TodoCreate.jsx";
import TodoButton from "./TodoButton.jsx";

function TodoList() {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            <span></span>
                            <span>아이템</span>
                            <TodoButton text={'삭제'}/>
                        </label>
                    </li>
                </ul>
                <TodoCreate/>
            </div>
        </>
    )
}

export default TodoList