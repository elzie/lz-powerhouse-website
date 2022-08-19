import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import './slick.css';

import LeftArrow from '../assets/left_arrow.png';
import RightArrow from '../assets/right_arrow.png';

const EquipmentContainer = styled.div`
  //   height: 700px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const ContentArea = styled.div`
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 40vw 100%;
`;

const BlueLeftArea = styled.div`
  background: #dce3f5;
  width: 40vw;
  height: 100%;
`;
const TextArea = styled.div`
  margin: 100px;
  max-width: 320px;
  h1 {
    background: linear-gradient(180deg, #1442b8 0%, #000000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;
  }
  @media (max-width: 1440px) {
    h1 {
      font-size: 38px;
    }
    margin: 80px;
    max-width: 220px;
  }
`;
const BlueLine = styled.div`
  width: 100px;
  height: 3px;
  background: #022d9d;
  margin: 15px 0 15px 0;
`;

const SliderArea = styled.div`
  width: 78%;
  padding-top: 15px;
  height: 100%;
  margin-left: -170px;
  @media (max-width: 1440px) {
  }
`;
const SliderOverlay = styled.div`
  height: 600px;
  width: 400px;
  background: rgba(0, 0, 0, 0.4);
`;

const EquipSlide = styled.div`
  height: 600px;
  width: 475px !important;
  // background: papayawhip;
  @media (max-width: 1440px) {
    width: 375px !important;
  }
  div {
    border: 1px solid black;
    height: 550px;
    // width: 470px;
    background: white;
    margin: 10px;
  }
  :focus {
    outline: none;
  }
`;
const NextArrow = styled.div`
  width: 90px;
  height: 90px;
  background: url(${RightArrow});
  background-position: center;
  position: absolute;
  top: 250px;
  right: 220px;
  cursor: pointer;
  z-index: 1000;
  display: block;
`;
const PrevArrow = styled.div`
  width: 90px;
  height: 90px;
  background: url(${LeftArrow});
  background-position: center;
  position: absolute;
  top: 250px;
  left: -33px;
  cursor: pointer;
  z-index: 1000;
  display: block;
`;

class EquipmentSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <EquipmentContainer>
        <ContentArea>
          <BlueLeftArea>
            <TextArea>
              <BlueLine />
              <h1>
                Gym <br />
                Equipment
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </TextArea>
          </BlueLeftArea>
          <SliderArea>
            <Slider {...settings}>
              <EquipSlide>
                <div>1</div>
              </EquipSlide>
              <EquipSlide>
                <div>2</div>
              </EquipSlide>
              <EquipSlide>
                <div>3</div>
              </EquipSlide>
              <EquipSlide>
                <div>4</div>
              </EquipSlide>
              <EquipSlide>
                <div>5</div>
              </EquipSlide>
            </Slider>
          </SliderArea>
          <SliderOverlay></SliderOverlay>
        </ContentArea>
      </EquipmentContainer>
    );
  }
}
export default EquipmentSlider;
