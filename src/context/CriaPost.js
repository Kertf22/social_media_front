import axios from "axios";
import  Router  from "next/router";
import { parseCookies } from "nookies";
import { api } from "../services/api";

export async function CreatePost(post){
    const { 'ufsproject_token': token } = parseCookies();
     
    const res = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/user/post",
    {   ...post },
    {   headers: { Authorization: `Bearer ${token}` }   }) 
        
    Router.push("/lobby");

    return res
}