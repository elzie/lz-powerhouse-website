import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 1000;
  border-bottom: 1px solid rgba(256, 256, 256, 0.5);
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  justify-content: space-around;
  div {
    text-align: center;
  }
`;

const PowerhouseLogo = styled.div`
  width: 115px;
  height: 56px;
  background: white;
  margin: 25px auto;
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Fnav_logo_white.png?alt=media&token=da9177e5-0755-4fd3-a0de-e8f112eeaaef');
  cursor: pointer;
`;
const MenuLinks = styled.div`
  margin-top: 40px;
  text-transform: uppercase;
  a {
    margin: 45px;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;

const KontaktBtn = styled.button`
  margin-top: 30px;
  font-size: 22px;
  font-weight: bold;
  background: none;
  border: 1px solid white;
  border-radius: 40px;
  color: white;
  padding: 10px 35px 10px 35px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: white;
    color: black;
  }
  :focus {
    outline: none;
  }
`;
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavContainer>
        <GridContainer>
          <div>
            <Link to="/">
              <PowerhouseLogo />
            </Link>
          </div>
          <div>
            <MenuLinks>
              <Link to="/sports-and-nutrition">Sport and Nutrition</Link>
              <Link to="/the-gym">The Gym</Link>
              <Link to="/about">Om os</Link>
            </MenuLinks>
          </div>
          <div>
            <Link to="/contact">
              <KontaktBtn>Kontakt</KontaktBtn>
            </Link>
            {/* TODO: Scroll to component, OR make a contact page?  */}
          </div>
        </GridContainer>
      </NavContainer>
    );
  }
}
export default Navigation;
