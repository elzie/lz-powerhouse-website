import React from 'react';
import styled from 'styled-components';

const MembershipContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 525px;
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
`;

const LeftBlue = styled.div`
  background: #022d9d;
  color: white;
  display: flex;
  justify-content: center;
`;

const RightBlack = styled.div`
  background: #000000;
  color: white;
  display: flex;
  justify-content: center;
`;

const WhiteLine = styled.div`
  width: 100px;
  height: 3px;
  background: white;
  margin: 55px 0 0 0px;
`;
const Text = styled.div`
  margin: 0 0 0 0px;
  width: 555px;
  position: relative;
  h1 {
    margin: 10px 0 0 0;
    font-size: 46px;
    font-weight: bold;
  }
  h2 {
    margin: 30px 0 0 0;
    font-size: 32px;
    font-weight: 400;
  }
`;
const ReadMoreBtn = styled.button`
  margin-top: 10px;
  font-size: 22px;
  font-weight: bold;
  background: white;
  border: 1px solid white;
  border-radius: 40px;
  color: #022d9d;
  padding: 10px 35px 10px 35px;
  text-transform: uppercase;
  cursor: pointer;
  position: absolute;
  bottom: 50px;
`;
class FrontpageMemberships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MembershipContainer>
        <LeftBlue>
          <Text>
            <WhiteLine />
            <h1>POWER HOUSE</h1>
            <h1 style={{ fontStyle: 'italic' }}>SPORT AND NUTRITION</h1>
            <h2>
              Priser fra <span style={{ fontWeight: 'bold' }}>499,-</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ReadMoreBtn>Læs mere</ReadMoreBtn>
            {/* TODO: Link to Sport And Nutrition */}
          </Text>
        </LeftBlue>
        <RightBlack>
          <Text>
            <WhiteLine />
            <h1>POWER HOUSE</h1>
            <h1 style={{ fontStyle: 'italic' }}>THE GYM</h1>
            <h2>
              Medlemsskab fra <span style={{ fontWeight: 'bold' }}>499,-</span>
            </h2>
            <br />

            <div>Grand opening</div>
            <h2 style={{ fontWeight: 'bold', margin: '0' }}> 1. December</h2>
            <ReadMoreBtn>Læs mere</ReadMoreBtn>
            {/* TODO: Link to The Gym */}
          </Text>
        </RightBlack>
      </MembershipContainer>
    );
  }
}
export default FrontpageMemberships;
