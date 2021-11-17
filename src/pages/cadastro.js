import axios from "axios"
import path from "path"
import Head from 'next/head'
import Image from 'next/image'
import Cadastro from '../components/Cadastro/Cadastro'
import { parseCookies } from 'nookies'


export default function CadastroPage(props) {
    return (
      <>
        <Head>
          <title>Sign-up Social Media </title>
          <meta name="description" content="Sign-up  Social Media " />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Cadastro {...props} >

        </Cadastro>
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