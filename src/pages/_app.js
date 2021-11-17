
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "../context/AuthContext";
import Head from 'next/head'
import "react-circular-progressbar/dist/styles.css";
const GlobalStyle = createGlobalStyle`
*, html {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  background-color:#7159c1;
  font-size: 14px;
  font-family:Arial, Helvetica, sans-serif;
  text-rendering: optimizeLegibility;
  
}

`;


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />

          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
          </Head>
          <Component {...pageProps} />
    </AuthProvider>
  );
}
 
export default MyApp;