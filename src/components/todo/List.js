import "./list.css";

function List({todos, onChange, onDelete}) {  

    return (
        <div className="list">
            {
                todos.map((todo) => {
                    return (
                        <div key={Math.random()}>
                            <input className="che" type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                                onChange({
                                    ...todo,
                                    isCompleted : e.target.checked
                                })
                            }} />
                            <p className="che1">{todo.text}</p>
                            <button className="che2" onClick={() => {
                                onDelete(todo);
                            }}>X</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;