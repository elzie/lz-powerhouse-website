import React from 'react';
import styled from 'styled-components';

const SportNutriContainer = styled.div`
  //   height: 700px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ContentArea = styled.div`
  width: 750px;
  height: 300px;
`;
const SubscriptionBox = styled.div`
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Fsubscription_bg.jpg?alt=media&token=f4a86b04-80af-4627-9f73-0d7b7fc9f8aa');
  width: 750px;
  height: 255px;

  position: relative;
  h1 {
    color: #1442b8;
    text-align: center;
  }
  p {
    padding-top: 30px;
    text-align: center;
  }

  input[type='email'] {
    position: absolute;
    bottom: 10px;
    width: 100%;
    // height: 50px;
    padding: 10px;
    font-size: 22px;
    color: #1442b8;
    border: 1px solid #1442b8;
    border-radius: 20px;
    :focus {
      outline: none;
    }
  }
`;

class SportNutriSubscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SportNutriContainer>
        <ContentArea>
          <SubscriptionBox>
            <h1>Tilmeld dig vores kostplan</h1>
            <p>
              Etiam sed lacinia dui. In maximus arcu vitae risus tristique, non
              dignissim lacus laoreet. Sed dui leo, sagittis lobortis pretium a,
              elementum non turpis.
            </p>
            <input
              type="email"
              name="subscription"
              placeholder="Din email"
            ></input>
          </SubscriptionBox>
        </ContentArea>
      </SportNutriContainer>
    );
  }
}
export default SportNutriSubscribe;
