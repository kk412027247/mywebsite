import React from 'react';
import './newsletter.css'

const Newsletter = () => (
  <div className={'news-letter'}>
    <h1 className={'news-letter-title'}>SIGNUP TO NEWSLETTER</h1>

    <input type="text" placeholder={'Your Name'}/>
    <input type="text" placeholder={'Your Email Address'}/>
    <div className={'news-letter-button'}>
      <span className={'news-letter-button-text'}>Subscribe Now</span>
    </div>
  </div>
);
export default Newsletter;
