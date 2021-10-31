import Head from 'next/head'
import Login from '../components/Login/Login'
import { parseCookies } from 'nookies'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {

  const { singIn } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Projeto UFS</title>
        <meta name="description" content="Projeto UFS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  )
}

export const getServerSideProps = async(ctx) => {
  
  const { 'ufsproject_token': token } = parseCookies(ctx)

  if (token){
    return {
      redirect: {
        destination:"/lobby",
        permanent:false
      }
    }
  }
  return {
      props: {
      }
  }
}