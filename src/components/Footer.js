import React from 'react';
import styled from 'styled-components';
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css';

const FooterContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(20, 66, 184, 0.15) 12.5%,
    rgba(20, 66, 184, 0) 71.87%
  );
  width: 100%;
  height: 100vh;
  padding-top: 150px;
`;
const Equipment = styled.div`
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Ffooter_equipment.svg?alt=media&token=d39bdfc4-1cad-4434-a0d1-358725e7eaf5');
  width: 1275px;
  height: 357px;
  margin: auto;
`;
const Text = styled.div`
  padding-top: 150px;
  margin: auto;
  text-align: center;
  color: #a3a3a3;
  max-width: 1200px;
  h1 {
    color: #022d9d;
    margin: 20px 0 50px 0;
    font-size: 46px;
    font-weight: bold;
  }
  p {
    width: 560px;
    margin: auto;
  }
`;
const GridContainer = styled.div`
  width: 560px;
  margin: 25px auto;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const LogoImage = styled.div`
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Ffooter_logo_color.png?alt=media&token=34c37bd5-f621-42db-9941-80769ee2446f');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: fit;
  width: 167;
  height: 81px;
`;
const SocialMedia = styled.div`
  //   height: 150px;

  text-align: center;
  display: flex;
  align-items: center;
  & div {
    margin: auto;
  }
  & img {
    height: 55px;
    padding-top: 1em;
  }
  i {
    color: #022d9d;
    position: relative;
    top: 15px;
    border: 1px solid #022d9d;
    padding: 0.4em;
    box-sizing: border-box;
    font-size: 26px;
    border-radius: 40px;
    margin-left: 1em;
    text-align: center;
    transition: all 0.2s;
    min-width: 50px;
    &:hover {
      cursor: pointer;
      color: white;
      background: #022d9d;
    }
  }
`;
const GridContainer2 = styled.div`
  margin: auto;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 186px 186px 186px 186px 304px;
  justify-content: space-around;
  span {
    display: block;
  }
`;
const BlueLine = styled.div`
  width: 100px;
  height: 3px;
  background: #022d9d;
  //   margin: 15px auto;
`;

const CopyRights = styled.div`
  width: 100%;
  height: 30px;
  background: black;
  color: white;
  text-align: center;
  padding-top: 10px;
`;
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FooterContainer>
        <Equipment />
        <Text>
          <GridContainer>
            <div>
              <LogoImage />
            </div>
            <div>
              <SocialMedia>
                <i className='fa fa-facebook' aria-hidden='true'></i>
                <i className='fa fa-instagram' aria-hidden='true'></i>
                {/* TODO: Social Links */}
              </SocialMedia>
            </div>
          </GridContainer>
          <p>
            Power House er navnet på et splinternyt 833kvm performance fitness
            center i Aarhus V. Power House ønsker at tilbyde alle velkomne til
            et nyt og moderne performance fitness center, med professionelt
            træningsudstyr, som kun findes få steder i Danmark.
          </p>
        </Text>
        <GridContainer2>
          <div>
            <BlueLine />
            <h2>Powerhouse</h2>
            <p>
              <span style={{ fontWeight: '700' }}>Adresse:</span>
              <span>Elkjærvej 2N</span>
              <span>8230 Åbyhøj, Aarhus V</span>
            </p>
            <p>
              <span style={{ fontWeight: '700' }}>Email:</span>
              <span>info@powerhouseaarhus.dk</span>
            </p>
            <p>
              <span style={{ fontWeight: '700' }}>Telefon Nr.:</span>
              <span>+45 4545 4545</span>
            </p>
            <p>
              <span style={{ fontWeight: '700' }}>CVR Nr.:</span>
              <span>41519541</span>
            </p>
          </div>
          <div>
            <BlueLine />
            <h2>Services (?)</h2>
            <p>
              <span style={{ fontWeight: '700' }}>Sports and Nutrition</span>
            </p>
            <p>
              <span style={{ fontWeight: '700' }}>The Gym</span>
            </p>
            {/* TODO: Links */}
          </div>
          <div>
            <BlueLine />
            <h2>Sitemap</h2>
            <p>
              <span style={{ fontWeight: '700' }}>Forside</span>
            </p>
            <p>
              <span style={{ fontWeight: '700' }}>Om os</span>
            </p>
            <p>
              <span style={{ fontWeight: '700' }}>Classes</span>
            </p>
            <p>
              <span style={{ fontWeight: '700' }}>Gym Equipment</span>
            </p>
            <p>
              <span style={{ fontWeight: '700' }}>Skriv til os</span>
            </p>
            {/* TODO: Links */}
          </div>
          <div>
            <BlueLine />
            <h2>Legal</h2>
            <p>
              <span style={{ fontWeight: '700' }}>Privatlivspolitik</span>
            </p>
            <p>
              <span style={{ fontWeight: '700' }}>Medlemskabsbetingelser</span>
            </p>
          </div>
          {/* TODO: Links */}
          <div>
            <BlueLine />
            <h2>Instagram</h2>
            <p>
              <span style={{ fontWeight: '700' }}>Load instagram photos? </span>
            </p>
            {/* TODO: Can react load images from Instagram?  */}
          </div>
        </GridContainer2>
        <CopyRights>Copyrights 2020 © Powerhouse</CopyRights>
      </FooterContainer>
    );
  }
}
export default Footer;
