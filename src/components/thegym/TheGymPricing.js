import React from 'react';
import styled from 'styled-components';

const PricingContainer = styled.div`
  //   height: 700px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ContentArea = styled.div`
  width: 1300px;
  height: 800px;
`;
const BlueLine = styled.hr`
  width: 100px;
  height: 3px;
  background: #022d9d;
  margin: 15px auto;
`;
const Text = styled.div`
  margin: auto;
  text-align: center;
  color: #a3a3a3;
  max-width: 1150px;
  line-height: 28px;
  h1 {
    color: black;
    margin: 20px 0 50px 0;
    font-size: 46px;
    font-weight: bold;
  }
`;
// box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);

const PricingBox = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  justify-content: space-around;
  margin-bottom: 50px;
`;
const PriceEntry = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  width: 400px;
  height: 545px;
  background: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  transition: all 1s ease;
  position: relative;
  h1 {
    color: #1442b8;
    text-align: center;
  }
  div {
    height: 400px;
    transition: all 1s ease;
  }
  &:hover {
    margin-top: 0px;
    height: 595px;
    div {
      height: 450px;
    }
  }
`;
const ContactBtn = styled.button`
  margin-top: 50px;
  font-size: 22px;
  font-weight: 400;
  border-radius: 40px;
  padding: 10px 35px 10px 35px;
  cursor: pointer;
  text-transform: uppercase;
  position: absolute;
  bottom: 40px;
  border: 1px solid #022d9d;
  color: #022d9d;
  background: white;
  &:hover {
    border: 1px solid white;
    color: white;
    background: #022d9d;
  }
  :focus {
    outline: none;
  }
`;
class TheGymPricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <PricingContainer>
        <ContentArea>
          <BlueLine />
          <Text>
            <h1>Vores priser</h1>
            <p>
              Aliquam erat volutpat. In quis quam risus. Sed consequat
              consectetur semper. Pellentesque sollicitudin ante leo,
              scelerisque consectetur enim porttitor ut. Fusce dictum lacus
              tempus bibendum molestie. Sed eu tortor sit amet lorem iaculis
              scelerisque a eget ante. Etiam metus ante, aliquet vel suscipit
              in, blandit in tellus.
            </p>
          </Text>
          <PricingBox>
            <PriceEntry>
              <div>
                <BlueLine />
                <h3>Self Training</h3>
                <h1>499 ,-</h1>
                <p>Training experience</p>
                <p>Training experience</p>
                <p>Training experience</p>
                <p>Training experience</p>
              </div>
              <ContactBtn>Kontakt</ContactBtn>
            </PriceEntry>
            <PriceEntry>
              <div>
                <BlueLine />
                <h3>Personal Training</h3>
                <h1>499 ,-</h1>
                <p>Training experience</p>
                <p>Training experience</p>
                <p>Training experience</p>
                <p>Training experience</p>
              </div>
              <ContactBtn>Kontakt</ContactBtn>
            </PriceEntry>
            <PriceEntry>
              <div>
                <BlueLine />
                <h3>Bootcamps</h3>
                <h1>499 ,-</h1>
                <p>Training experience</p>
                <p>Training experience</p>
                <p>Training experience</p>
                <p>Training experience</p>
              </div>
              <ContactBtn>Kontakt</ContactBtn>
            </PriceEntry>
          </PricingBox>
        </ContentArea>
      </PricingContainer>
    );
  }
}
export default TheGymPricing;
