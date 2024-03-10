
import baseURL from '../Api/baseURL'

// Custom hook for making GET requests
const useGetRequest =async(url,params)=>{
    const res=await baseURL.get(url,params)
    return res
}
export default useGetRequest