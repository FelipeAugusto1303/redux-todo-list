const listReducer = (state = [] , action) => {
    switch(action.type){
        case "ADD_TASK":
            console.log(typeof state)
            return [...state,action.payload]
        case "REMOVE_TASK":
            return state.filter(item => item !== action.payload)
        
        default:
            return state;
    }
}

export default listReducer;