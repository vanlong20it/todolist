import React, { Suspense } from "react";
import "./TodoList.scss";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const { todolist } = props;
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="list-item">
                {todolist.map((item, index) => (
                    <TodoItem index={index} item={item} key={index} />
                ))}
            </div>
        </Suspense>
    );
}
export default TodoList;
