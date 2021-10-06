import React from "react"
import Layout from "../components/Layout"

const error = () => {
  return (
    <Layout>
      <main className="error-page">
        <h1>404</h1>
        <h3>page not found</h3>
      </main>
    </Layout>
  )
}

export default error