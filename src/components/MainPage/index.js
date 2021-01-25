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
        if (todolist.length !== 0) {
            const count = todolist.filter((item) => {
                if (item.status) {
                    return true;
                } else {
                    return false;
                }
            });
            setFinish(count.length);
            setUnfinish(todolist.length - count.length);
        }
    }, [todolist, setFinish]);

    return (
        <section className="main-section">
            <div className="title-name">
                <h1 className="text-center">Danh sách công việc</h1>
            </div>
            <div className="navbar">
                <p>{timer}</p>
                <p>
                    Tổng: {todolist.length} | Đã làm: {finish} | Đang làm:{" "}
                    {unfinish}
                </p>
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
