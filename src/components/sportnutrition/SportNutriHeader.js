import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 600px;
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Fsportnutri_header_web.jpg?alt=media&token=ed4c7a8f-8471-4a2f-aac4-38f4afc0dfa3');
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
  top: 0;
`;
const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 600px;
  h1 {
    text-transform: uppercase;
    color: white;
    text-align: center;
    font-size: 64px;
    margin: 0;
  }
`;

const BlueLine = styled.div`
  width: 175px;
  height: 5px;
  background: #022d9d;
  margin: 15px auto;
`;

class SportNutriHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HeaderContainer>
        <Content>
          <div>
            <BlueLine />
            <h1>Powerhouse</h1>
            <h1>Sport and Nutrition</h1>
          </div>
        </Content>
      </HeaderContainer>
    );
  }
}
export default SportNutriHeader;
