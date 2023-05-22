export default (state,action) => {
    switch(action.type){
        case 'DELETE_ROW':
            return{
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
            }
        case 'ADD_ROW':
            return{
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        default:
            return state;
    }
}