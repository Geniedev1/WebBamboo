import React from 'react'
import FadeInWrapper from '../FadeInWrapper'
export const Hero = () => {
  return (
    <>
     <section className="hero">
        <div className="container">
          <div className="hero-content">
            <FadeInWrapper>
            <p className="hero-subtitle">25% off all products.</p>
            </FadeInWrapper>
            <FadeInWrapper delay={300}>
            <h2 className="h1 hero-title">
              Qualityful <span className="span">Products</span>
              Interior &amp; <span className="span">Jewelry.</span>
            </h2>
            </FadeInWrapper>
           <FadeInWrapper delay={600}>
           <p className="hero-text">
              It has survived not only five centuries also there leaped.
            </p>
            </FadeInWrapper>
           <FadeInWrapper delay={900}>
           <a href="/shop" className="btn btn-primary">
              <span className="span">Shop Now</span>
              <ion-icon name="chevron-forward" aria-hidden="true" />
            </a>
            </FadeInWrapper>
          </div>
         <FadeInWrapper delay={1200}>
         <figure className="hero-banner">
            <img
              src="./images/Banner.png"
              width={603}
              height={634}
              loading="lazy"
              alt="Vegetables"
              className="w-100"
            />
          </figure>
          </FadeInWrapper>
        </div>
      </section>
    </>
  )
}
