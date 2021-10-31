
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "../context/AuthContext";
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
          <Component {...pageProps} />
    </AuthProvider>
  );
}
 
export default MyApp;