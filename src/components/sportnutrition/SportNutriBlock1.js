import React from 'react';
import styled from 'styled-components';

// import TheGymSidebar from './TheGymSidebar';

const SportNutriContainer = styled.div`
  //   height: 700px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ContentArea = styled.div`
  width: 1300px;
  // background: #cecece;
  display: grid;
  grid-template-columns: 950px 300px;
`;
const BlueLine = styled.div`
  width: 100px;
  height: 3px;
  background: #022d9d;
  margin: 15px 0 15px 0;
`;

const MainContent = styled.div`
  width: 950px;
`;

const TopImage = styled.div`
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Fsportnutri_topimage_web.jpg?alt=media&token=dad844dd-c63a-42de-a94c-abdb42c526e7');
  width: 950px;
  height: 565px;
`;
const MainText = styled.div`
  h1 {
    text-transform: uppercase;
  }
`;
const SideBar = styled.div``;
class SportNutriBlock1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SportNutriContainer>
        <ContentArea>
          <MainContent>
            <TopImage />
            <BlueLine />
            <MainText>
              <h1>Powerhouse</h1>
              <h1>Sport and Nutrition</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur dolor massa, faucibus vitae interdum et, laoreet quis
                nibh. Duis feugiat eros id quam efficitur, sed aliquam massa
                maximus. Donec viverra velit ut diam facilisis, sit amet
                convallis metus viverra. Vivamus lacinia dolor rhoncus, dapibus
                tellus congue, imperdiet tortor. Proin venenatis sit amet mi
                mattis fermentum. Sed sit amet elit rutrum, venenatis tellus
                nec, mattis purus. Integer aliquet magna lacus, id egestas risus
                elementum eget. Cras felis velit, accumsan ut ipsum ac,
                consequat commodo ex. Nam sapien elit, porttitor quis faucibus
                eget, sodales eu sem. Nunc consectetur nisi dui, sed egestas
                nisi ultricies eu.
              </p>

              <p>
                Morbi et interdum nunc. Aenean tempor mauris eget eros euismod,
                non rutrum lorem pretium. Aenean commodo dui id tristique
                elementum. Donec vel pretium felis, a iaculis nulla. Etiam sed
                lacinia dui. In maximus arcu vitae risus tristique, non
                dignissim lacus laoreet. Sed dui leo, sagittis lobortis pretium
                a, elementum non turpis. Duis accumsan volutpat tortor, vitae
                ornare ex aliquet non.
              </p>

              <p>
                Pellentesque consequat, orci euismod rutrum feugiat, enim risus
                maximus tellus, non sodales mi enim tincidunt purus. Nam non
                lacus quam. Aliquam vel orci massa. Aliquam efficitur ultrices
                rutrum. Maecenas ligula risus, aliquam vitae ultricies a,
                volutpat vel justo. Nulla ultricies sapien eleifend, molestie
                purus non, accumsan mauris. Proin iaculis nulla turpis. Cras
                tristique finibus orci, in feugiat massa ultricies ut. Vivamus
                tempus turpis at erat blandit molestie.
              </p>
            </MainText>
          </MainContent>
          <SideBar>sidebar</SideBar>
        </ContentArea>
      </SportNutriContainer>
    );
  }
}
export default SportNutriBlock1;
