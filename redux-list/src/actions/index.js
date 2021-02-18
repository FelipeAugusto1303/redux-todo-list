export const addTask = (task) => {
    return{
        type: "ADD_TASK",
        payload: task
    }
}
export const removeTask = (indexTask) => {
    return{
        type:"REMOVE_TASK",
        payload: indexTask
    }
}