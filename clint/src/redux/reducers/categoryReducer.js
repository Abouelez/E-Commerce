 
import { GET_ALL_CATEGORY, GET_ERROR } from "../type";
// Initial state  
const initialState = {
    loading: true,  
    category: [],  
};

// Reducer to manage requird cases
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state, // Keep existing state
                category: action.payload, // Update categories
                loading: false // Set loading false
            };
        case GET_ERROR:
            return {
                loading: true, 
                category: action.payload, 
            };
        default:
            return state; 
    }
};


export default categoryReducer;
