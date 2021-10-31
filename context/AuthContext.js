import axios from "axios"
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies"
import  Router  from "next/router";
import jwt_decode from "jwt-decode";
import { api } from "../services/api";
import { Disconnect } from "./Disconnect";
import { CreatePost } from "./CriaPost";
import { DeletaPost } from "./DeletaPost";
import { UserPost } from "./UserPosts";
import { GetPosts } from "./GetPosts";
 
export const AuthContext = createContext({})

export function AuthProvider({children}){

    const [user, setUser] = useState();

    const isAuthenticated = !!user;

    useEffect(async () => {
        const { 'ufsproject_token': token } = parseCookies()

        if (token){
            setTimeout(() =>{ }, 700)
            const { data } = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/user", {
                headers: { Authorization: `Bearer ${token}` }
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}` ;

            setUser({...data})
            if(Router.pathname == "/" || Router.pathname == "/cadastro" ){
                Router.push("/lobby")
            }
        }

    }, [])

    async function singIn({name,password}){

       const { data } = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/user/login", {
        name,
        password
      })

      const { imgUrl } = jwt_decode(data);

      setCookie(undefined, 'ufsproject_token', data,{
          maxAge: 60* 60* 24 // 1 dia
      })

      setUser({name,imgUrl})

      Router.push("/lobby")
    }

    async function singUp({formData}){

        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/user", {
            method: 'POST',
            body: formData,
          })

        const token = await res.json();

        const { name, imgUrl } = jwt_decode(token);

        setCookie(undefined, 'ufsproject_token', token,{
            maxAge: 60* 60* 24 // 1 dia
        });

        setUser({name,imgUrl});

        Router.push("/lobby");
    }


    
    return (
        <AuthContext.Provider value={{ user,isAuthenticated,singIn,singUp,Disconnect,DeletaPost, CreatePost, UserPost,GetPosts}}>
            {children}
        </AuthContext.Provider>
    )
}