//Next
import { AppProps } from "next/app"

//Components
import Layout from "./Layout"

//Css
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
