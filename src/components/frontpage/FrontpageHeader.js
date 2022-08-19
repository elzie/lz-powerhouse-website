import React from 'react';
import styled from 'styled-components';

// import HeaderImage from 'https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Ffrontpage_header.jpg?alt=media&token=1a6b9edb-6e0f-47fb-9cd3-8537329860ad';

const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Ffrontpage_header_web.jpg?alt=media&token=f4f93cb2-44d1-4967-9c5c-4d70dea1d080');
  background-position: center top;
  position: relative;
  top: 0;
`;
const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  h1 {
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
  display: flex;
  align-items: center;
`;
const TeaserText = styled.div`
  font-size: 24px;
  color: white;
  width: 900px;
  text-align: center;
  padding: 10px 0 0 0;
  font-weight: 300;
`;
class FrontpageHeader extends React.Component {
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
            <h1>POWERHOUSE</h1>
            <h1 style={{ fontStyle: 'italic' }}>THE GYM</h1>
            <TeaserText>
              Power House er navnet på et splinternyt 833kvm performance fitness
              center i Aarhus V. Power House ønsker at tilbyde alle velkomne til
              et nyt og moderne performance fitness center, med professionelt
              træningsudstyr, som kun findes få steder i Danmark. Vi ønsker et
              sundt træningsmiljø med plads til alle uanset træningsmål, således
              der er plads til den almene motionist såvel som elite atleten.
            </TeaserText>
          </div>
        </Content>
      </HeaderContainer>
    );
  }
}
export default FrontpageHeader;
