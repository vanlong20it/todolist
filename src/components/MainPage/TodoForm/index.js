import React, { useState } from "react";
import "./TodoForm.scss";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../actions/todoAction";

const TodoForm = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const addNewTodo = () => {
        if (value.length === 0) {
            return false;
        }
        const newTodo = {
            status: false,
            name: value,
            date: new Date().toLocaleString(),
        };

        const action = addTodo(newTodo);
        dispatch(action);
        setValue("");
    };
    return (
        <form className="form-group">
            <input
                type="text"
                className="input--new-todo"
                placeholder="Nhập tên công việc..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addNewTodo();
                }}
                type="submit"
                className="submit--new-todo"
            >
                Thêm
            </button>
        </form>
    );
};

export default TodoForm;
