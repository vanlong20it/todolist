import React from "react";
import "./TodoList.scss";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const { todolist } = props;
    return (
        <div className="list-item">
            {todolist.length > 0 && (
                <div className="title-item">
                    <div className="todo-item">
                        <div className="check-todo">
                            <p>OK</p>
                        </div>
                        <div className="name">
                            <p>Tên CV</p>
                        </div>
                        <div className="date">
                            <p>Thời gian</p>
                        </div>
                        <div className="delete-todo">
                            <p>Xóa</p>
                        </div>
                    </div>
                </div>
            )}
            {todolist.length > 0 &&
                todolist.map((item, index) => (
                    <TodoItem index={index} item={item} key={index} />
                ))}
        </div>
    );
}
export default TodoList;
