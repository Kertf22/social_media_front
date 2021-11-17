import Head from 'next/head'
import CriarPost  from '../components/CreatePost/CreatePost'
import { parseCookies } from 'nookies'

export default function LobbyPage(props) {

    return (
      <>
        <Head>
          <title>Social Media Create Post</title>
          <meta name="description" content="Social Media Create Post" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CriarPost></CriarPost>
      </>
    )
  }

