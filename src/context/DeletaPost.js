import axios from "axios";
import { parseCookies } from "nookies";


export async function DeletaPost(post){
    const { 'ufsproject_token': token } = parseCookies();

    const res = await axios.delete(process.env.NEXT_PUBLIC_BASE_URL + "/user/post",{
        headers: { Authorization:`Bearer ${token}` },  
        data:{ post_id:post._id }
    })

    return res;
}