import "./css/users.css";
import { useState } from "react";
import Search from "./todo/Search";
import List from "./todo/List";
import Footer from "./todo/Footer";

function Users() {

    const [todos, setTodos] = useState([
        {
            id : Math.random(),
            text : "Learn JS",
            isCompleted : false
        },
        {
            id : Math.random(),
            text : "Learn CSS",
            isCompleted : false
        },
        {
            id : Math.random(),
            text : "Learn HTML",
            isCompleted : false
        }
    ]);



    return (
        <div className="users">

            <div className="todo">
                <Search onAdd={(text) => {
                    setTodos([
                        ...todos,
                        {
                            id : Math.random(),
                            text : text,
                            isCompleted : false
                        }
                    ]);
                }} />
                <List
                    todos={todos}
                    onDelete={(todo) => {
                        setTodos(todos.filter((t) => t.id !== todo.id))
                    }}
                    
                    onChange={(newTodo) => {
                        setTodos(todos.map((todo) => {
                            if(todo.id === newTodo.id) {
                                return newTodo;
                            } 
                            return todo
                        }))
                    }}

                />
                <Footer
                    todos={todos}
                    onClear={() => {
                        setTodos(todos.filter((todo) => !todo.isCompleted));
                    }}
                />
            </div>

        </div>
    )
}

export default Users;