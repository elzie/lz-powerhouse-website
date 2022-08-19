import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 120px 0 120px 0;
`;
const ContentArea = styled.div`
  height: 750px;
  width: 1300px;
  //   border: 1px solid blue;
  display: grid;
  grid-template-columns: 50% 50%;
`;
const BlueLine = styled.div`
  width: 100px;
  height: 3px;
  background: #022d9d;
  margin: 55px 0 0 0px;
`;
const Text = styled.div`
  padding: 60px 50px 120px 0;
  h1 {
    background: linear-gradient(180deg, #1442b8 0%, #000000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px 0 50px 0;
    font-size: 46px;
    font-weight: bold;
  }
`;
const ReadMoreBtn = styled.button`
  margin-top: 50px;
  font-size: 22px;
  font-weight: 400;
  background: #022d9d;
  border: 1px solid white;
  border-radius: 40px;
  color: white;
  padding: 10px 35px 10px 35px;
  text-transform: uppercase;
  cursor: pointer;
  //   position: absolute;
  //   bottom: 50px;
`;
const Image = styled.div`
  width: 666px;
  height: 760px;
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Ffrontpage_about_teaser.png?alt=media&token=a1705ad5-9fff-442c-9d36-e2325160a7c5');
`;

class FrontpageAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <AboutContainer>
        <ContentArea>
          <Text>
            <BlueLine />
            <h1>About us</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p>
              Pellentesque tempor mollis ante eu molestie. Curabitur congue
              magna eget sapien malesuada porttitor. Vestibulum eu dapibus dui.
              In sollicitudin mauris massa, ut mattis lectus lacinia ac. Ut sed
              molestie mauris, ut eleifend lorem. Nullam ipsum diam, suscipit
              vel molestie aliquet, accumsan id odio. Mauris mi enim, imperdiet
              nec molestie vitae, consectetur quis eros. Donec eget dolor
              condimentum, consectetur nulla viverra, molestie magna.
            </p>
            <ReadMoreBtn>Læs mere</ReadMoreBtn>
            {/* TODO: Link to About Us page */}
          </Text>
          <Image />
        </ContentArea>
      </AboutContainer>
    );
  }
}
export default FrontpageAbout;
