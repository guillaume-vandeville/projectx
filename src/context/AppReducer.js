const appReduce = (state,action) => {
    switch(action.type){
        case 'ADD_ROW':
            return{
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        default:
            return state;
    }
}

export default appReduce