import React from 'react';
import Button from '@mui/material/Button';
import PDF from '@site/static/Resume.pdf';


const DownloadButton = () => {

  return (
    <a href={PDF} download>
      <Button variant="contained" color = "success">
        Download
      </Button>
    </a>
  );
};

export default DownloadButton;