import React from 'react';
import PDF from '@site/static/Resume.pdf';


class PdfDisplay extends React.Component {
    render() {
        return (
            <iframe 
                src={PDF} 
                frameborder="0" 
                style={{ 
                    width: '100%', 
                    height: '100vh' 
                }}
                title="Resume">
            </iframe>
        );
    }
}

export default PdfDisplay;