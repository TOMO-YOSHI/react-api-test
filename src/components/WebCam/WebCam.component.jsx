import React from "react";
import Webcam from "react-webcam";

import './WebCam.styles.scss';

const videoConstraints = {
  width: 1280,
  height: 720,
    // facingMode: "user",
  facingMode: { exact: "environment" },
};

const w = window.innerWidth;
const h = window.innerHeight;


const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageArea = document.getElementById("imageArea");
    imageArea.innerHTML = '<img src="' + imageSrc + '"/>';

  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        height={h}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={w}
        videoConstraints={videoConstraints}
      />
      <button className="takePhoto" onClick={capture}>Capture photo</button>
      <div id="imageArea"></div>
    </div>
  );
};

export default WebcamCapture;