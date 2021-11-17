import axios from "axios";
import  Router  from "next/router";
import { parseCookies } from "nookies";

export async function ChagePhoto(id,state){
    const { 'ufsproject_token': token } = parseCookies();
     
    const formData = new FormData();

    if (state){
        formData.append("file",state.file);
    } else{
        throw Error("Você esqueceu de selecionar uma foto!")
    };

    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/user/profile", {
        method: 'POST',
        body: formData,
        headers: { Authorization: `Bearer ${token}`}
    })
    
    if(res.status === 400){
        throw await res.json();
    };
    Router.push(`/user/${id}`);
}