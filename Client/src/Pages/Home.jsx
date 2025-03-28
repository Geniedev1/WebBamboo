import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Hero } from '../Component/HomeComponent/Hero'
import { AllProduct } from '../Component/HomeComponent/AllProduct'
import { Footer } from '../Component/Footer'
import { ToastContainer} from 'react-toastify';
import {Link} from 'react-router-dom';
import FadeInWrapper from '../Component/FadeInWrapper'

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
    <div className = "flex flex-col">
         <div className="features-container md:grid md:grid-cols-4 md:gap-48  max-md:grid max-md:grid-cols-1 ">
  <div className="feature-item">
    <FadeInWrapper delay={1400}>
        <div>
        <img src="images/Ad/service-promo-1.png" alt="Not found" />
        <h3>FREE SHIPPING</h3>
        <p>
          Get 10% cash back, free shipping free returns <br />
          and more at 100+ top retailers!
        </p>
        </div>
    </FadeInWrapper>
  </div>

  <div className="feature-item">
    <FadeInWrapper delay={1600}>
      <div>
      <img src="images/Ad/service-promo-2.png" alt="Not found" />
        <h3>30 DAYS MONEY BACK</h3>
        <p>
          100% satisfaction guaranteed, get your money <br />
          back within 30 days!
        </p>
      </div>
    </FadeInWrapper>
  </div>

  <div className="feature-item">
    <FadeInWrapper delay={1800}>
        <div>
        <img src="images/Ad/service-promo-3.png" alt="Not found" />
        <h3>SAFE PAYMENT</h3>
        <p>
          Pay with the world’s most popular and secure <br />
          payment methods!
        </p>
        </div>
    </FadeInWrapper>
  </div>

  <div className="feature-item">
    <FadeInWrapper delay={2000}>

       <div>
       <img src="images/Ad/service-promo-4.png" alt="Not found" />
        <h3>LOYALTY CUSTOMER</h3>
        <p>
          Card for the other 30% of their purchases <br />
          at a rate of 1% cash back.
        </p>
       </div>

    </FadeInWrapper>
  </div>
</div>
<div className="Home_img mt-[400px] md:mt-0  ">
  <div className="Home_img_text Home_img_2">
    <FadeInWrapper delay={200}>

       <div>
       <img className = "hidden md:block" src="images/Home/banner-style-1-img-1.jpg" alt="" />
        <div className="overlay-text">
          Day La Mau Mot <br />
          <p>
            <Link to="/">
              <b>Shop Now</b>
            </Link>
          </p>
        </div>
  </div>
    </FadeInWrapper>
  </div>

  <div className="Home_img_4">
    <div className="Home_img_text Home_imgs1">
      <FadeInWrapper delay={400}>
        <>
          <img src="images/Home/banner-style-2-img-1.jpg" alt="" />
          <div className="overlay-text">
           <FadeInWrapper delay={600}>
            <>
            Day La Mau Mot <br />
            <p>
              <Link to="/">
                <b>Shop Now</b>
              </Link>
            </p>
            </>
            </FadeInWrapper>
          </div>
        </>
      </FadeInWrapper>
    </div>

    <div className="Home_img_text Home_imgs2">
      <FadeInWrapper delay={600}>
        <>
          <img src="images/Home/banner-style-2-img-2.jpg" alt="" />
          <div className="overlay-text">
            Day La Mau Mot <br />
            <p>
              <Link to="/">
                <b>Shop Now</b>
              </Link>
            </p>
          </div>
        </>
      </FadeInWrapper>
    </div>
  </div>

  <div className="Home_img_4 md:my-0 md:mx-0 my-[30px] mx-0">
    <div className="Home_img_text Home_imgs3">
      <FadeInWrapper delay={1000}>
        <>
          <img src="images/Home/banner-style-2-img-3.jpg" alt="" />
          <div className="overlay-text">
            Day La Mau 2 <br />
            <p>
              <Link to="/">
                <b>Shop Now</b>
              </Link>
            </p>
          </div>
        </>
      </FadeInWrapper>
    </div>

    <div className="Home_img_text Home_imgs4">
      <FadeInWrapper delay={1200}>
        <>
          <img src="images/Home/banner-style-2-img-4.jpg" alt="" />
          <div className="overlay-text">
            Day La Mau 2 <br />
            <p>
              <Link to="/">
                <b>Shop Now</b>
              </Link>
            </p>
          </div>
        </>
      </FadeInWrapper>
    </div>
  </div>
</div>
</div>
   <div>
    <div className = "mx-80">
    <FadeInWrapper delay={600}>
              <h1 className ="font-bold text-[23px]">THE NEW ARRIVALS</h1>
              <h3>Preorder now to receive exclusive deals & gifts</h3>
        </FadeInWrapper>
    </div>
    <div className ="grid grid-cols-1 " >
          <AllProduct/>
    </div>
   </div>
      {/* 
  - #PRODUCT
*/}

      
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
