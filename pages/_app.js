import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #1d1d1d;
    color: #fff;
    font-family: sans-serif;
  }

  a{
    text-decoration: none;
  }
  p{
    margin: 0;
  }
`;

const theme = {
  colors: {
    active: "#ec7968",
    white: "#fff",
    dark: "#262626",
    darker: "#1d1d1d",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
