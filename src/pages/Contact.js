import React from 'react';
// import styled from 'styled-components';

import ContactHeader from '../components/contact/ContactHeader';
import ContactPage from '../components/contact/ContactPage';
import Footer from '../components/Footer';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <ContactHeader />
        <ContactPage />
        <Footer />
      </div>
    );
  }
}
export default Contact;
