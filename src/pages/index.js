import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>click me</ExampleButton>
        <h1>Home page</h1>
        <h1>hello world</h1>
        <h1>hello people</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quasi
          ad minima dicta, beatae quo ducimus alias minus esse dolorem itaque!
          Voluptatum ullam ut ipsam modi veniam vero dolor suscipit.
        </p>
      </div>
    </Layout>
  )
}
