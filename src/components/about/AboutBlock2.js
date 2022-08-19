import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  //   height: 700px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;
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
  max-width: 1150px;
  line-height: 28px;
  h1 {
    color: black;
    margin: 20px 0 50px 0;
    font-size: 46px;
    font-weight: bold;
  }
`;

const VisonsArea = styled.div`
  margin-top: 50px;
  // height: 500px;
  width: 100%;
  max-width: 1200px;
  color: white;
  margin-bottom: 50px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ImageArea = styled.div`
  width: 764px;
  height: 676px;
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Fabout_powerhouse_couple.jpg?alt=media&token=e7ce9943-9dfc-46c9-8bba-17eeeb42af21');
  @media (max-width: 1440px) {
    background-size: cover;
    width: 564px;
    height: 576px;
  }
`;
const BlueLineSmall = styled.div`
  width: 90px;
  height: 3px;
  background: #1442b8;
  margin: 55px 0 0 0px;
`;
const TextArea = styled.div`
  color: black;
  display: flex;
  align-items: center;
  // padding-left: 50px;
`;
const TextBox = styled.div`
  p {
    max-width: 450px;
  }
`;
class AboutBlock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AboutContainer>
        <ContentArea>
          <BlueLine />
          <Text>
            <h1>Personerne bag </h1>
            <h1>POWERHOUSE </h1>
            <p>
              Aliquam erat volutpat. In quis quam risus. Sed consequat
              consectetur semper. Pellentesque sollicitudin ante leo,
              scelerisque consectetur enim porttitor ut. Fusce dictum lacus
              tempus bibendum molestie. Sed eu tortor sit amet lorem iaculis
              scelerisque a eget ante. Etiam metus ante, aliquet vel suscipit
              in, blandit in tellus.
            </p>
          </Text>

          <VisonsArea>
            <TextArea>
              <div>
                <TextBox>
                  <BlueLineSmall />
                  <h1>
                    Jonas Helbech Nielsen
                    <br />
                    <span style={{ fontWeight: '400' }}>og</span> Lærke Bach
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc rhoncus risus ante, eleifend cursus nisl facilisis ac.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Integer ultrices tincidunt
                    quam, at faucibus felis mollis faucibus.
                  </p>
                </TextBox>
              </div>
            </TextArea>
            <ImageArea />
          </VisonsArea>
        </ContentArea>
      </AboutContainer>
    );
  }
}
export default AboutBlock2;
