import { axiosReq } from "../utils/axios";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import {useQuery, useMutation} from '@tanstack/react-query'

export const useAxios = async(type, route, details) => {
console.log("inside hook");
  if(type === "AUTH"){
    const response = await axiosReq.post(route,{...details});
    return {data: response.data, status:response.status};
  }
  
}

export const useGetUser = () => {
   const {token} = useContext(AuthContext);
   const getUserDataRequest = async() => {
      const response = await axiosReq.get('/secure-route',{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data
    } 
     const {data:userDetails, isLoading, isError, error} = useQuery({
      queryKey: ["user"],
      queryFn: getUserDataRequest,
    })
    if(isError && error){
      console.log(error.message);
      throw new Error("SOmething went wrong")
    }
    return {userDetails, isLoading}

}

export const useUpdateUser = () => {
  const {token} = useContext(AuthContext);
  const updateUserRequest = async(formData) => {
    const response = await axiosReq.post('/secure-route-two',{...formData},{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.status;
  }

  const {mutate: updateUser, isPending, isError, error} = useMutation({
    mutationFn: updateUserRequest,
  });

  return {updateUser, isPending, isError, error}
}
  
