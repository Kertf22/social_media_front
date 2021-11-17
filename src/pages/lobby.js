import Head from 'next/head'
import Lobby from '../components/Lobby/Lobby'
import { parseCookies } from 'nookies'
import axios from 'axios'


export default function LobbyPage(props) {


    return (
      <>
        <Head>
          <title>Social Media</title>
          <meta name="description" content="Social Media" />
          <link rel="icon" href="/favicon.ico" />



        </Head>
        <Lobby {...props} ></Lobby>
      </>
    )
  }

export const getServerSideProps = async(ctx) => {

    const { 'ufsproject_token': token } = parseCookies(ctx)
    console.log(token)
    if (!token){
      return {
        redirect: {
          destination:"/",
          permanent:false
        }
      }
    }


    const res = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/posts",{
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