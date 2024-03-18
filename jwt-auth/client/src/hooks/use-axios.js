import { axiosReq } from "../utils/axios";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import {useQuery, useMutation} from '@tanstack/react-query'
import {toast} from 'sonner';
import {useNavigate} from 'react-router-dom';
export const useAuth = async(route, details) => {

    const response = await axiosReq.post(route,{...details});
    return {data: response.data, status:response.status};
  
}

export const useGetUser = () => {
   const {token} = useContext(AuthContext);
   const navigate = useNavigate()
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
      retry: 1

    })
    if(isError && error){
      toast.error("You cant access this without logging in");
      // setTimeout(() => {
      //   navigate('/')
      // }, 5000);
      
      
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
  
