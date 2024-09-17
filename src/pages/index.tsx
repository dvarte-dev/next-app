//React
import React, { useEffect, useState } from "react"

//Next
import { GetServerSideProps } from "next"

//Components
import Home from "../components/Home"

//Types
import { IndexPageProps } from "@/types/components"

//SeverSide
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}

const Index: React.FC<IndexPageProps> = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
    }
  }, [loaded])

  return (
    <>
      <Home />
    </>
  )
}

export default Index
