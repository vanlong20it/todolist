const initialState = {
    todo: [],
    done: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return { state, todo: [action.payload, ...state.todo] };
        }
        case "DELETE_TODO": {
            return {
                todo: [
                    ...state.todo.slice(0, action.payload),
                    ...state.todo.slice(action.payload + 1, state.todo.length),
                ],
            };
        }
        case "DONE_TODO": {
            let newArr = [...state.todo];
            const item = Object.assign({}, newArr[action.payload], {
                status: true,
            });
            newArr = [
                ...newArr.slice(0, action.payload),
                ...newArr.slice(action.payload + 1, state.todo.length),
            ];
            newArr.push(item);
            return {
                todo: newArr,
            };
        }
        case "UPDATE_TODO": {
            let newArr = [...state.todo];
            const item = Object.assign({}, newArr[action.payload], {
                status: false,
                date: new Date().toLocaleString(),
            });
            newArr = [
                ...newArr.slice(0, action.payload),
                ...newArr.slice(action.payload + 1, state.todo.length),
            ];
            newArr.unshift(item);
            return {
                todo: newArr,
            };
        }
        default:
            return state;
    }
};

export default todoReducer;
