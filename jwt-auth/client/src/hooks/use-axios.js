import { axiosReq } from "../utils/axios";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import {useQuery} from '@tanstack/react-query'

export const useAxios = async(type, route, details) => {
console.log("inside hook");
  if(type === "AUTH"){
    const response = await axiosReq.post(route,{...details});
    return {data: response.data, status:response.status};
  }
  if(type="GET"){
    const ctx = useContext(AuthContext)
    const getUserData = async() => {
      const response = await axiosReq.get(route,{...details},{
        headers: {
          Authorization: `Bearer ${ctx.token}`
        }
      })
      return response
    } 
    const {data, isLoading, isError, error} = useQuery({
      queryKey: ["user"],
      queryFn: getUserData
    })
    return {data, isLoading, isError, error}
  }
  

  }
  
