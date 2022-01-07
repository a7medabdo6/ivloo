import Head from "next/head";
import "semantic-ui-css/semantic.min.css";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          id="rey-wp-style-css"
          href="https://ivloo.com/wp-content/themes/rey/style.min.css?ver=2.2.1.1"
          type="text/css"
          media="all"
        />
        
      </Head>
      <Component {...pageProps} />
    </>
  );
}
