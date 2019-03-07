import React from 'react';
import './header.css';

const Header = () =>(
  <div id={'header'}>
    <div className={'header-box'}>
      <div className={'header-left'}>
        <img src={require('./images/menu.png')} alt=""/>
      </div>

      <img src={require('./images/logo.png')} alt=""/>

      <div className={'header-right'}>
        <img src={require('./images/rss.png')} alt=""/>
        <img src={require('./images/twitter.png')} className={'header-icon'} alt=""/>
        <img src={require('./images/tumbler.png')} className={'header-icon'}  alt=""/>
        <img src={require('./images/facebook.png')} className={'header-icon'} alt=""/>
        <img src={require('./images/search.png')} className={'header-icon'} alt=""/>
      </div>
    </div>

  </div>
);

export default Header;
