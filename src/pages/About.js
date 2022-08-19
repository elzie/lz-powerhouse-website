import React from 'react';
// import styled from 'styled-components';

import AboutHeader from '../components/about/AboutHeader';
import AboutBlock1 from '../components/about/AboutBlock1';
import AboutBlock2 from '../components/about/AboutBlock2';
import Footer from '../components/Footer';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <AboutHeader />
        <AboutBlock1 />
        <AboutBlock2 />
        <Footer />
      </div>
    );
  }
}
export default About;
