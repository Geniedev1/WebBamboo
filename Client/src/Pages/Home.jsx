import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Hero } from '../Component/HomeComponent/Hero'
import { ListProduct } from '../Component/HomeComponent/ListProduct'
import { Footer } from '../Component/Footer'
import { ToastContainer} from 'react-toastify';
import {Link} from 'react-router-dom';

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
     <div className="features-container">
    <div className="feature-item">
      <img src="images/Ad/service-promo-1.png" alt="Not found" />
      <h3>FREE SHIPPING</h3>
      <p>Get 10% cash back, free shipping free returns <br /> and more at 100+ top retailers!</p>
    </div>

    <div className="feature-item">
      <img src="images/Ad/service-promo-2.png" alt="Not found" />
      <h3>30 DAYS MONEY BACK</h3>
      <p>100% satisfaction guaranteed, get your money <br />back within 30 days!</p>
    </div>

    <div className="feature-item">
      <img src="images/Ad/service-promo-3.png" alt="Not found" />
      <h3>SAFE PAYMENT</h3>
      <p>Pay with the world’s most popular and secure <br /> payment methods!</p>
    </div>

    <div className="feature-item">
      <img src="images/Ad/service-promo-4.png" alt="Not found" />
      <h3>LOYALTY CUSTOMER</h3>
      <p>Card for the other 30% of their purchases <br /> at a rate of 1% cash back.</p>
    </div>
  </div>
   <div className ="Home_img">
      <div className = "Home_img_text Home_img_2">
          <img src="images/Home/banner-style-1-img-1.jpg" alt="" />
          <div className ="overlay-text">Day La Mau Mot <br />
                                         <p><Link  to="/" ><b>Shop Now</b></Link></p>
               </div>
        </div>
   <div className = "Home_img_4">
        <div className ="Home_img_text Home_imgs1">
               <img src="images/Home/banner-style-2-img-1.jpg" alt="" />
               <div className ="overlay-text">Day La Mau Mot <br />
                                         <p><Link  to="/" ><b>Shop Now</b></Link></p>
               </div>
        </div>
        <div className ="Home_img_text Home_imgs2">
                <img src="images/Home/banner-style-2-img-2.jpg" alt="" />
                <div className ="overlay-text">Day La Mau Mot <br />
                                         <p><Link  to="/" ><b>Shop Now</b></Link></p>
               </div>
        </div>
    </div>
    <div className = "Home_img_4">
            <div className ="Home_img_text Home_imgs3">
                <img src="images/Home/banner-style-2-img-3.jpg" alt="" />
                <div className ="overlay-text">Day La Mau Mot <br />
                                         <p><Link  to="/" ><b>Shop Now</b></Link></p>
               </div>
            </div>
             <div className ="Home_img_text Home_imgs4">
               <img src="images/Home/banner-style-2-img-4.jpg" alt="" />
               <div className ="overlay-text">Day La Mau Mot <br />
                                         <p><Link  to="/" ><b>Shop Now</b></Link></p>
               </div>
            </div> 
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
