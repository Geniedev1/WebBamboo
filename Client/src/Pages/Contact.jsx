import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'

export const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0) }, []);

  return (
    <>
    <Header/>
    <div className = "header_hef">
    </div>
    <div class = "Contact">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51474.488389005564!2d105.65763418039862!3d20.926002731676657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31344def665bc727%3A0x6b9b39cae8be2b53!2zVHLGsOG7nW5nIFRIUFQgQ2jGsMahbmcgTeG7uSBB!5e1!3m2!1svi!2s!4v1741062351687!5m2!1svi!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class = "Contact_map"></iframe>
            <div class = "Contact_ig">
                <div class = "Contact_gmail Contact_c"></div>
                <div class = "Contact_img  Contact_c"></div>
            </div>

    </div>
    <Footer/>
    </>
  )
}