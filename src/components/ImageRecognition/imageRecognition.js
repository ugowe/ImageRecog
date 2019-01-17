import React from 'react';
import './imageRecognition.css';

const ImageRecognition = ({ isImagePresent, imageURL, tags }) => {
  if (isImagePresent) {
    return (
      <div className='center ma'>
        <div className='mt4 taggedImage'>
          <img style={{ marginBottom: '50px', marginRight: '20px' }} alt='' src={imageURL} width='500px' height='auto' />
        </div>
        <div className='tagBox mt4 ph3'>
          <div style={{ marginTop: '15px' }}>
            {tags.map(tag =>
              <a className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" href="#0">{tag}</a>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default ImageRecognition;
