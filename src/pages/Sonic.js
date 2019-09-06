import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Sonic = () => (
  <Layout>
    <SEO title="Home" />
    <h1>All star racing</h1>
    <div>
      <p>The site that will change you mind about racing for ever! we are currently tring to make aeveryone a part of our community and we will rise above normal racing</p>
    </div>
    <Link to="/">Go to index</Link>
    <br></br>
    <Link to="/racers/">Check out the racers</Link>
  </Layout>
)

export default Sonic
