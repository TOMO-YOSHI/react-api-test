import React from "react";
import Webcam from "react-webcam";

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
        height={w}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={h}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      <div id="imageArea"></div>
    </div>
  );
};

export default WebcamCapture;