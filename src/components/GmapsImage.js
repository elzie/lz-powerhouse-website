import React from 'react';
import styled from 'styled-components';

const GmapsImg = styled.div`
  background: url('https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Fgmaps_image.jpg?alt=media&token=388c07b9-7214-4ca3-84b7-f6d44c7a4015');
  width: 100%;
  min-height: 519px;
`;

// https://firebasestorage.googleapis.com/v0/b/sm-powerhouseaarhus.appspot.com/o/gfx%2Fgmaps_image.jpg?alt=media&token=388c07b9-7214-4ca3-84b7-f6d44c7a4015
class GmapsImage extends React.Component {
  render() {
    return (
      <div>
        <GmapsImg />
      </div>
    );
  }
}
export default GmapsImage;
