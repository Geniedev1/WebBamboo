import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Hero } from '../Component/HomeComponent/Hero'
import { ListProduct } from '../Component/HomeComponent/ListProduct'
import { Footer } from '../Component/Footer'
import { ToastContainer} from 'react-toastify';




export const Home = () => {
  
  useEffect(() => { window.scrollTo(0, 0) 
  }
  , []);
  


  return (
    <>
  {/* 
    - #HEADER
  */}
  <Header />
  {/* 
    - #ASIDE
  */}
  {}
  <main>
    <article>
      {/* 
  - #HERO
*/}
     <Hero/>
     <div class = "Home_ad">
      <dix><img src="public\images\Ad\service-promo-1.png" alt="" /></dix>
      <dix></dix>
      <dix></dix>
      <dix></dix>
     </div>
    
      {/* 
  - #PRODUCT
*/}

      <ListProduct/>
      
    </article>
  </main>
  {/* 
    - #FOOTER
  */}
<Footer/>
  {/* 
    - #BACK TO TOP
  */}
  <a
    href="#top"
    className="back-to-top"
    aria-label="Back to Top"
    data-back-top-btn=""
  >
    {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevrons-up" /> */}
  <i className="fa-solid fa-chevrons-up"/>
  {/* <ion-icon name="arrow-up-outline" /> */}
  </a>
  {/* 
    - custom js link
  */}
  {/* 
    - ionicon link
  */}
      <ToastContainer />

</>

  )
}
