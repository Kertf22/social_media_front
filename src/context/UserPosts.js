import axios from "axios";
import { parseCookies } from "nookies";


export async function UserPost(currentPage,limit){
    const { 'ufsproject_token': token } = parseCookies();
     
    const { data } = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/user/posts",
    { 
        headers: { Authorization: `Bearer ${token}` },
        params:{
            _page:currentPage,
            _limit:limit,
        }
    })

    return data 
}