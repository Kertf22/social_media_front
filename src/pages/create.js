import Head from 'next/head'
import CriarPost  from '../components/CreatePost/CreatePost'
import { parseCookies } from 'nookies'

export default function LobbyPage(props) {

    return (
      <>
        <Head>
          <title>Projeto UFS</title>
          <meta name="description" content="Projeto UFS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CriarPost></CriarPost>
      </>
    )
  }

