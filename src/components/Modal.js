import React from 'react';
import '../styles.css'
import { Button } from 'react-bootstrap';
import { Modal as _Modal } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf'
import test from '../assets/test.pdf'

function Modal(props) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    
    <_Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <_Modal.Header closeButton>
        <_Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </_Modal.Title>
      </_Modal.Header>
      <_Modal.Body>
        <Document
          file={test}
          onLoadError={console.error}
        >
          <Page pageNumber={1}/>
        </Document>
      </_Modal.Body>
      <_Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </_Modal.Footer>
    </_Modal>
  );

} export default Modal