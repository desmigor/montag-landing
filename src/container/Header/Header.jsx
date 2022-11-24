import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Get the new tastes" />
      <h1 className="app__header-h1">The key to Heathy Drinks</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Healthy drinks like fruit smoothies and vegetable juices are packed with nutrition and can certainly help in boosting a person's immunity.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
