import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'
import { ListProduct } from '../Component/HomeComponent/ListProduct'

export const Blog = () => {
  useEffect(() => { window.scrollTo(0, 0) }, []);

  return (
    <>
      <Header />
      
      <div className = "Blog_box">
      <main className="blog-main">
        <section className="blog-content">
          <h1>Blog</h1>
          <p>Welcome to our blog! Here you will find the latest updates and articles.</p>
          <article className="blog-post">
            <h2>Blog Post Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <article className="blog-post">
            <h2>Another Blog Post</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>
        </section>
        <aside className="sidebar">
          <h2>Related Products</h2>
        </aside>
      </main>
      </div>
      <ListProduct />
      <Footer />
    </>
  )
}
