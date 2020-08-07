import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'


const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>How to Contact Us</h2>
      <p>It's pretty easy</p>
      Need a developer? <Link to="https://www.facebook.com">facebook</Link>
    </Layout>
  )
}

export default ContactPage
