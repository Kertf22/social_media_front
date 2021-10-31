import {destroyCookie} from "nookies";
import  Router  from "next/router";

export async function Disconnect(){
    destroyCookie(undefined, 'ufsproject_token');

    Router.push("/")
};