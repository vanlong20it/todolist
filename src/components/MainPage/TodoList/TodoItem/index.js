import React from "react";
import "./TodoItem.scss";
import {
    deleteTodo,
    doneTodo,
    updateTodo,
} from "../../../../actions/todoAction";
import { useDispatch } from "react-redux";

function TodoItem(props) {
    const dispatch = useDispatch();
    const { status, name, date } = props.item;
    const { index } = props;
    const handleDeleteTodo = (idx) => {
        const action = deleteTodo(idx);
        dispatch(action);
    };
    const handleDoneTodo = (idx) => {
        const action = doneTodo(idx);
        dispatch(action);
    };
    const handleUpdateTodo = (idx) => {
        const action = updateTodo(idx);
        dispatch(action);
    };
    return (
        <div className={!status ? "todo-item" : "todo-item done"} index={index}>
            <div
                className="check-todo"
                onClick={() => {
                    if (!status) {
                        handleDoneTodo(index);
                    } else {
                        handleUpdateTodo(index);
                    }
                }}
            ></div>
            <div className="name">
                <p>{name}</p>
            </div>
            <div className="date">
                <p>{new Date(date).toLocaleTimeString()}</p>
            </div>
            <div
                className="delete-todo"
                onClick={() => {
                    handleDeleteTodo(index);
                }}
            ></div>
        </div>
    );
}

export default TodoItem;
