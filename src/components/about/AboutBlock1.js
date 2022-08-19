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
  //   height: 500px;
  width: 100%;
  color: white;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ImageArea = styled.div`
  width: 875px;
  height: 874px;
  // width: 100%;
  // height: auto;
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Fabout_visions_img.png?alt=media&token=933663c3-329d-4968-951e-f74c13a1f3f5');
  @media (max-width: 1440px) {
    background-size: cover;
    width: 675px;
    height: 674px;
  }
`;
const BlueLineSmall = styled.div`
  width: 50px;
  height: 3px;
  background: #1442b8;
  margin: 35px 0 0 0px;
`;
const TextArea = styled.div`
  color: black;
  display: flex;
  align-items: center;
`;
const TextBox = styled.div`
  p {
    max-width: 650px;
  }
`;
class AboutBlock1 extends React.Component {
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
            <h1>POWERHOUSE </h1>
            <p>
              Aliquam erat volutpat. In quis quam risus. Sed consequat
              consectetur semper. Pellentesque sollicitudin ante leo,
              scelerisque consectetur enim porttitor ut. Fusce dictum lacus
              tempus bibendum molestie. Sed eu tortor sit amet lorem iaculis
              scelerisque a eget ante. Etiam metus ante, aliquet vel suscipit
              in, blandit in tellus. Maecenas scelerisque pulvinar quam, nec
              finibus arcu sodales eu. Vivamus varius sem justo, id posuere arcu
              finibus a. Ut sodales neque vitae sodales feugiat. Aenean justo
              ipsum, fringilla sit amet pharetra mollis, iaculis lacinia diam.
              Cras mi libero, sollicitudin id malesuada nec, pellentesque id
              felis. Aliquam arcu nisi, venenatis nec nisi sit amet, vehicula
              suscipit neque. Praesent vulputate lacinia maximus. Curabitur
              volutpat, turpis a luctus gravida, massa nibh euismod sapien, non
              convallis quam magna vel erat.
            </p>
          </Text>

          <VisonsArea>
            <ImageArea />
            <TextArea>
              <div>
                <TextBox>
                  <BlueLineSmall />
                  <h1>Vision</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc rhoncus risus ante, eleifend cursus nisl facilisis ac.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Integer ultrices tincidunt
                    quam, at faucibus felis mollis faucibus.
                  </p>
                </TextBox>
                <TextBox>
                  <BlueLineSmall />
                  <h1>Mission</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc rhoncus risus ante, eleifend cursus nisl facilisis ac.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Integer ultrices tincidunt
                    quam, at faucibus felis mollis faucibus.
                  </p>
                </TextBox>
                <TextBox>
                  <BlueLineSmall />
                  <h1>Værdier</h1>
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
          </VisonsArea>
        </ContentArea>
      </AboutContainer>
    );
  }
}
export default AboutBlock1;
