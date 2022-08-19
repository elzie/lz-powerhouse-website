import React from 'react';
// import styled from 'styled-components';

import FrontpageHeader from '../components/frontpage/FrontpageHeader';
import FrontpageMemberships from '../components/frontpage/FrontpageMemberships';
import FrontpageAbout from '../components/frontpage/FrontpageAbout';
import FrontpageClasses from '../components/frontpage/FrontpageClasses';
import FrontpageTrainers from '../components/frontpage/FrontpageTrainers';
import EquipmentSlider from '../components/EquipmentSlider';
import ContactPage from '../components/contact/ContactPage';
import Footer from '../components/Footer';

class Frontpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <FrontpageHeader />
        <FrontpageMemberships />
        <FrontpageAbout />
        <FrontpageClasses />
        <FrontpageTrainers />
        <EquipmentSlider />
        <ContactPage />
        <Footer />
      </div>
    );
  }
}
export default Frontpage;
