import React from 'react';
import styled from 'styled-components';

const NutritionContainer = styled.div`
  //   height: 700px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
`;

const ContentArea = styled.div`
  width: 100%;
  height: 600px;
`;

const BlueLeftArea = styled.div`
  background: #dce3f5;
  width: 40vw;
  height: 100%;
`;

class NutritionSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NutritionContainer>
        <ContentArea>
          <BlueLeftArea></BlueLeftArea>
        </ContentArea>
      </NutritionContainer>
    );
  }
}
export default NutritionSlider;
