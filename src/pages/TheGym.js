import React from 'react';
// import styled from 'styled-components';

import TheGymHeader from '../components/thegym/TheGymHeader';
import TheGymBlock1 from '../components/thegym/TheGymBlock1';
import TheGymPricing from '../components/thegym/TheGymPricing';
import EquipmentSlider from '../components/EquipmentSlider';
import GmapsImage from '../components/GmapsImage';
import Footer from '../components/Footer';

class TheGym extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <TheGymHeader />
        <TheGymBlock1 />
        <TheGymPricing />
        <EquipmentSlider />
        <GmapsImage />
        <Footer />
      </div>
    );
  }
}
export default TheGym;
