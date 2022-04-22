import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>want to get in touch?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              natus sunt, magni assumenda autem laudantium obcaecati
              perspiciatis ratione velit
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              natus sunt,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              natus sunt, magni assumenda autem laudantium obcaecati
              perspiciatis ratione velit explicabo voluptas molestias
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
                <button className="btn block">submit</button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
