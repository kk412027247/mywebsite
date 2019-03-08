import React from 'react';
import './banner.css';


const Banner = () => (
  <div id={'banner'}>
    <div className={'banner-image'}>

      <div className={'banner-left'}>
        <h4 className={'title'}>Latest News</h4>
        <p className={'content'}>BODY BUILDING BEST FOR YOU HEALTH</p>
      </div>

      <div className={'banner-right'}>
        <div className={'banner-indicator'}>
          <img src={require('./images/left.png')} alt=""/>
          <span className={'indicator-text'}>Featured Article</span>
          <img src={require('./images/right.png')} alt=""/>
        </div>
      </div>
    </div>

  </div>
);

export default Banner;
