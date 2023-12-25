import React from 'react'
import './Hangers.css'
import Linkedin from '@site/static/social-media/linkedin.svg'

const Hangers = () => {
  return (
    <>
      <div className="RightLineStyle" />
      <div className="RightHangerStyle">
        <div>bnsapa2000@gmail.com</div>
      </div>
      <div className="LeftLineStyle" />
      <div className="LeftHangerStyle">
        <div>
          <Linkedin  style={{
            width: '30px',
            height: '30px',
            marginRight: '5px',
            verticalAlign: 'middle',
            transform: 'rotate(-90deg)',
          }}/>
          <Linkedin  style={{
            width: '30px',
            height: '30px',
            marginRight: '5px',
            verticalAlign: 'middle',
            transform: 'rotate(-90deg)',
          }}/>
        </div>
      </div>
    </>
  )
}

export default Hangers