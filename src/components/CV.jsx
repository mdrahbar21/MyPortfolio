import React, { Component } from 'react';
import Pdf from '../assets/Rahbar_CV.pdf';
import { SectionWrapper } from '../hoc';

class Download extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank">Download Pdf</a>
        </div>
    );

  }
}

export default SectionWrapper(Download, "resume");