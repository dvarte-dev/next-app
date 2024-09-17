// Next
import Head from "next/head"

// React
import { useEffect, useState } from "react"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
    }
  }, [loaded])

  return (
    <>
      <Head>
        <title>Project</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
