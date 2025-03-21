import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'
import { ListProduct } from '../Component/HomeComponent/ListProduct'

export const Blog = () => {
  useEffect(() => { window.scrollTo(0, 0) }, []);

  return (
    <>
      <Header />
      <div className ="mt-96 py-2 grid grid-cols-1 gap-2 max-md:grid-cols-3">
            <div className="h-10 bg-fuchsia-700"></div>
            <div className="h-10 bg-fuchsia-700"></div>
            <div className="h-10 bg-fuchsia-700"></div>
          
            <div className ="w-full bg-amber-800 h-96" >
                <br />
            </div>
      </div>
      
      <Footer />
    </>
  )
}
