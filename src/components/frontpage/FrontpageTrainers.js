import React from 'react';
import styled from 'styled-components';

const TrainersContainer = styled.div`
  //   height: 700px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const ContentArea = styled.div`
  width: 100%;
`;

const BlueLine = styled.div`
  width: 100px;
  height: 3px;
  background: #022d9d;
  margin: 15px auto;
`;
const Text = styled.div`
  margin: auto;
  text-align: center;
  color: #a3a3a3;
  max-width: 650px;
  h1 {
    background: linear-gradient(180deg, #1442b8 0%, #000000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px 0 50px 0;
    font-size: 46px;
    font-weight: bold;
  }
`;

const SliderArea = styled.div`
  height: 500px;
  width: 100%;
  color: white;
  background: #092585; // not final
  margin-bottom: 50px;
`;

class FrontpageTrainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TrainersContainer>
        <ContentArea>
          <BlueLine />
          <Text>
            <h1>Our Trainers</h1>
            <p>
              Aliquam ipsum augue, posuere eget elementum vel, convallis auctor
              nulla. Cras elementum eget justo sit amet facilisis. Quisque
              congue sed felis at finibus. Pellentesque eget interdum magna.
              Mauris sagittis cursus tortor a molestie.
            </p>
          </Text>
          {/* TODO: Make epic slider */}
          <SliderArea> Coming Soon</SliderArea>
        </ContentArea>
      </TrainersContainer>
    );
  }
}
export default FrontpageTrainers;
