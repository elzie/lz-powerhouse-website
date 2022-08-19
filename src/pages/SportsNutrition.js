import React from 'react';
// import styled from 'styled-components';

import SportNutriHeader from '../components/sportnutrition/SportNutriHeader';
import SportNutriBlock1 from '../components/sportnutrition/SportNutriBlock1';
import TheGymPricing from '../components/thegym/TheGymPricing';
import SportNutriSubscribe from '../components/sportnutrition/SportNutriSubscribe';
import NutritionSlider from '../components/NutritionSlider';
import GmapsImage from '../components/GmapsImage';
import Footer from '../components/Footer';

class SportsNutrition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <SportNutriHeader />
        <SportNutriBlock1 />
        <TheGymPricing />
        <SportNutriSubscribe />
        <NutritionSlider />
        <GmapsImage />
        <Footer />
      </div>
    );
  }
}
export default SportsNutrition;
