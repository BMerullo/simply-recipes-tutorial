import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          repellendus possimus ipsa exercitationem delectus nulla minima sed
          veniam, voluptas fuga doloribus deserunt culpa provident hic
          voluptatum totam cumque, sapiente necessitatibus?
        </p>
      </div>
    </Layout>
  )
}
export default about
