import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import "./MainPage.scss";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";

function MainPage() {
    const todolist = useSelector((state) => state.todolist.todo);
    const [timer, setTimer] = useState(new Date().toLocaleString());
    const [finish, setFinish] = useState(0);
    const [unfinish, setUnfinish] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTimer(new Date().toLocaleString());
        }, 1000);
    }, [setTimer]);

    useEffect(() => {
        if (todolist) {
            const count = todolist.filter((item) => {
                if (item.status) {
                    return true;
                } else {
                    return false;
                }
            });
            setUnfinish(todolist.length - count.length);
            setFinish(count.length);
        }
    }, [todolist, setFinish]);

    return (
        <section className="main-section">
            <div className="navbar">
                <p className="date-time">{timer}</p>
                <div className="info">
                    <ul>
                        <li>Tổng: {todolist.length}</li>
                        <li>Đang làm: {unfinish}</li>
                        <li>Đã làm: {finish}</li>
                    </ul>
                </div>
            </div>
            <div className="todo-form">
                <TodoForm />
            </div>
            <div className="todo-list">
                <TodoList todolist={todolist} />
            </div>
        </section>
    );
}
export default MainPage;
