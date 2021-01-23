export const initialState = {
    basket: [],
    user: null,
};

const Reducer = (state,action) => {
    console.log(action.type);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding items to basket
            return { 
                ...state,
            basket: [...state.basket, action.item],
         };
        case 'REMOVE_TO_BASKET':
            //Logic to remove items
            return {...state};
        default:
            return state;
            
    }
}

export default Reducer;