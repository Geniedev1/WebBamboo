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
     <div class="features-container">
    <div class="feature-item">
      <img src="images/Ad/service-promo-1.png" alt="Not found" />
      <h3>FREE SHIPPING</h3>
      <p>Get 10% cash back, free shipping free returns <br /> and more at 100+ top retailers!</p>
    </div>

    <div class="feature-item">
      <img src="images/Ad/service-promo-2.png" alt="Not found" />
      <h3>30 DAYS MONEY BACK</h3>
      <p>100% satisfaction guaranteed, get your money <br />back within 30 days!</p>
    </div>

    <div class="feature-item">
      <img src="images/Ad/service-promo-3.png" alt="Not found" />
      <h3>SAFE PAYMENT</h3>
      <p>Pay with the world’s most popular and secure <br /> payment methods!</p>
    </div>

    <div class="feature-item">
      <img src="images/Ad/service-promo-4.png" alt="Not found" />
      <h3>LOYALTY CUSTOMER</h3>
      <p>Card for the other 30% of their purchases <br /> at a rate of 1% cash back.</p>
    </div>
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
