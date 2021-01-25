export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo,
    };
};

export const deleteTodo = (index) => {
    return {
        type: "DELETE_TODO",
        payload: index,
    };
};

export const doneTodo = (index) => {
    return {
        type: "DONE_TODO",
        payload: index,
    };
};

export const updateTodo = (index) => {
    return {
        type: "UPDATE_TODO",
        payload: index,
    };
};
