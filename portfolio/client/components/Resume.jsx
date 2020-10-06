import React, { Component } from 'react'
import ViewSDKClient from '../components/ViewSDKClient';

class Resume extends Component {
    state = {}

    componentDidMount() {
      const viewSDKClient = new ViewSDKClient();
      viewSDKClient.ready().then(() => {
          /* Invoke file preview */
          viewSDKClient.previewFile("pdf-div", {
              /* Pass the embed mode option here */
              embedMode: "SIZED_CONTAINER"
          });
      });
  }

    render () {
        return <div className='contact-container' id="resume">
          <div className="spacer">
            <img className="spacerimg" src="../../images/spacer3.jpg" />
          </div>
          <div id="pdf-div" className="sized-container-div"/>
      </div>
    } 
}

export default Resume