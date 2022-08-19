import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 100px 0 120px 0;
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Ffrontpage_googlemap.jpg?alt=media&token=30876b1f-5017-4d34-9c22-9b1f8e2e756a');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
`;
const ContentArea = styled.div`
  height: 1000px;
  width: 1170px;
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
  max-width: 1200px;
  h1 {
    background: linear-gradient(180deg, #1442b8 0%, #000000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px 0 50px 0;
    font-size: 46px;
    font-weight: bold;
  }
`;
const ContactArea = styled.div`
  margin: auto;

  background: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const ContactForm = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Ffrontpage_contact_bg.png?alt=media&token=e9a67bf4-436f-47f1-8bb5-e4c47249b9f7');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 20px;
  width: 1130px;
  min-height: 525px;
`;
const ContactInfo = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 44% 44%;
  justify-content: space-around;
  color: #a3a3a3;
  input[type='text'] {
    width: 100%;
    padding: 12px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #a3a3a3;
    // border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
  input,
  label {
    display: block;
  }
  input:focus,
  select:focus {
    background: #ededed;
    outline: none;
  }
  input:hover {
    background: #ededed;
    outline: none;
  }
`;
const ContactMessage = styled.div`
  color: #a3a3a3;
  margin: auto;
  width: 94%;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  div {
    width: 100%;
    display: block;
  }
  textarea {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #a3a3a3;

    max-height: 150px;
    resize: vertical;
    :focus {
      background: #ededed;
      outline: none;
    }
    :hover {
      background: #ededed;
      outline: none;
    }
  }
  label {
    display: block;
  }
  input[type='submit'] {
    // margin: auto;
    font-size: 22px;
    font-weight: 400;
    background: #022d9d;
    border: 1px solid #022d9d;
    border-radius: 40px;
    color: #fff;
    padding: 10px 55px 10px 55px;
    text-transform: uppercase;
    cursor: pointer;
    position: absolute;
    bottom: 40px;

    cursor: pointer;
    display: block;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    :focus {
      outline: none;
    }
  }
`;

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ContactContainer>
        <ContentArea>
          <Text>
            <BlueLine />
            <h1>Skriv til os</h1>
            <p>
              Aliquam ipsum augue, posuere eget elementum vel, convallis auctor
              nulla. Cras elementum eget justo sit amet facilisis. Quisque
              congue sed felis at finibus. Pellentesque eget interdum magna.
              Mauris sagittis cursus tortor a molestie.
            </p>
          </Text>
          <ContactArea>
            <ContactForm>
              <ContactInfo>
                <div>
                  <label htmlFor="fullName">Fulde navn:</label>
                  <input type="text" name="fullName" />
                  <label htmlFor="phonenr">Telefon nummer:</label>
                  <input type="text" name="phonenr" />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="text" name="email" />
                  <label htmlFor="topic">Emne:</label>
                  <input type="text" name="topic" />
                </div>
              </ContactInfo>
              <ContactMessage>
                <div>
                  <label htmlFor="subject">Skriv en besked</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder=""
                    style={{ height: '50px' }}
                  ></textarea>
                </div>
                <input type="submit" value="Send" />
                {/* TODO: Submit form functionality, send mail to info@powerhouseaarhus.dk */}
              </ContactMessage>
              <div></div>
            </ContactForm>
          </ContactArea>
        </ContentArea>
      </ContactContainer>
    );
  }
}
export default ContactPage;
