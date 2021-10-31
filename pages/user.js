import axios from 'axios';
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useContext } from "react";
import Profile from '../components/Profile/Profile';
import { AuthContext } from "../context/AuthContext";
import { UserPost } from '../context/UserPosts';


export default function User({first_posts}) {

  return (
    <>
      <Head>
        <title>Projeto UFS</title>
        <meta name="description" content="Projeto UFS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Profile first_posts={first_posts}/>
    </>
  )
}

export const getServerSideProps = async(ctx) => {
  const { 'ufsproject_token': token } = parseCookies(ctx)

  if (!token){
    return {
      redirect: {
        destination:"/",
        permanent:false
      }
    }
  }


  const res = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/user/posts",{
    headers: { Authorization: `Bearer ${token}` },
    params:{
      _page:0,
      _limit:4
    }
  })

    return {
      props: {
        first_posts: res.data
      }
  }
}