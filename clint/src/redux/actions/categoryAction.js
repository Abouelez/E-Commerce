 
import { GET_ALL_CATEGORY, GET_ERROR } from "../type";
import useGetRequest from "../../hooks/useGetRequst"; 

// fetch all categories from the API
const getAllCategory = () => {
    return async (dispatch) => {
        try { 
            //  fetch categories data from useegetrequst hook
            const res = await useGetRequest('/api/categories');
            console.log(res.data);
            
            //update the store with fetched categories
            dispatch({
                type: GET_ALL_CATEGORY,
                payload: res.data // Pass data as payload
            });
        } catch (error) {
            // if there error to handle 
            dispatch({
                type: GET_ERROR,
                payload: error.message  
            });
        }
    };
};

export default getAllCategory;
