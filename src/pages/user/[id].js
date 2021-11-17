import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies'
import Profile from '../../components/Profile/Profile';

export default function User({existUser,user,first_posts}) {
  const router = useRouter();
    if (router.isFallback)
    {
        return <>
            <Head title={`Loding...`} /></>
    }

  if(!existUser){
    return (
    <>
      <Head>
        <title>Profile inexistent</title>
        <meta name="description" content="Profile inexistent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile existUser={existUser} />
    </>
    )
  }
  return (
    <>
      <Head>
        <title>Profile {user.name}</title>
        <meta name="description" content="Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Profile first_posts={first_posts} existUser={existUser} userProfile={user}/>
    </>
  )
}

export const getServerSideProps = async(ctx) => {
  const { 'ufsproject_token': token } = parseCookies(ctx);

  if (!token){
    return {
      redirect: {
        destination:"/lobby",
        permanent:false
      }
    }
  };

 
  // Pegando o id pela rota do navegador
  const { id } = ctx.query;

  const user = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}` ,
  { headers: { Authorization: `Bearer ${token}` }})

  // Verificação se o usuário realmente existe
  if (!user){
    return {
      props:{
        existUser: false
      }
    }
  };

  // Recebendo os 4 primeiros post do usuário
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}/posts` ,{
    headers: { Authorization: `Bearer ${token}` },
    params:{
      _page:0,
      _limit:4
    }
  });

    return {
      props: {
        existUser: true,
        first_posts: data,
        user:user.data
      }
  }
}