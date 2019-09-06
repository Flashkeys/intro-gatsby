import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Sonic = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Racers</h1>
    <ul>
        <li>Sonic</li>
        <li>Bert</li>
        <li>Karl</li>
        <li>Bob</li>
    </ul>
    <Link to="/Sonic/">Back to home 2.0</Link>
  </Layout>
)

export default Sonic
