import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import samplePDF from './Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function pdfComponent() {

  return (
    <ReactPDF
      file={{
        url: 'Resume.pdf'
      }}
    />
  );
}