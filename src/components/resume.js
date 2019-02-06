import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import { Document, Page } from 'react-pdf';

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Grid>
          <Cell col={12} offsetDesktop={4} phone={4} tablet={8} style={{overflowX: 'auto'}}>
              {/* <Document
                file="BlackAndPastelModernCreativeResume.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document> */}
              <p>Page {pageNumber} of {numPages}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;