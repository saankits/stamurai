import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="f-left">
        <h2>A B C Weather</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit facere totam ullam cum, debitis iusto ipsum asperiores, beatae illo commodi omnis labore soluta provident quia officiis, voluptatem sit reprehenderit.</p>
      </div>
      <div className="f-right">
        <h2>Contact us</h2>
        <div className="social-links">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        </div>
        <div className="contact-info">
            <p>Contact No. : +91 XXXXXXX258</p>
            <p>Email : abc@abcweather.co.in</p>
        </div>
      </div>
    </div>
  )
}

export default Footer


