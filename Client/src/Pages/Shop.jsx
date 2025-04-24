import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'
import { ListProduct } from '../Component/HomeComponent/ListProduct'

export const Shop = () => {
  useEffect(() => { window.scrollTo(0, 0) }, []);


  return (
    <>
    <Header/>
    <div class = "header_hef">
     <div class="header_hef_Shop">
     
     </div>
    </div>
    <ListProduct/>
    <Footer/>
    </>
  )
}
