import React, { useEffect } from 'react';

import './Camera.styles.scss'

const Camera = () => {

    var w = window.innerWidth;
    var h = window.innerHeight;

    useEffect(()=> {
        var video = document.getElementById('video');

        // // Get access to the camera!
        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        //     // Not adding `{ audio: true }` since we only want video now
        //     navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        //         //video.src = window.URL.createObjectURL(stream);
        //         video.srcObject = stream;
        //         video.play();
        //     });
        // }

        const constraints = {
            advanced: [
            {
                facingMode: "environment",
            },
            ],
        };

        // Get access to the camera!
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Not adding `{ audio: true }` since we only want video now
            navigator.mediaDevices
              .getUserMedia({ video: constraints })
              .then(function (stream) {
                //video.src = window.URL.createObjectURL(stream);
                video.srcObject = stream;
                video.play();
              });
        }

        // Elements for taking the snapshot
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        // var video = document.getElementById('video');

        // Trigger photo take
        document.getElementById("snap").addEventListener("click", function () {
            context.drawImage(video, 0, 0, w, h);

            var img = canvas.toDataURL("image/png");
            const imageArea = document.getElementById("imageArea");
            imageArea.innerHTML = '<img src="' + img + '"/>';
        });

    },[])

    return (
      <div className="cameraDiv">
        <div className="videoContainer">
          <video id="video" width={w} height={h}></video>
          <button id="snap">Snap Photo</button>
        </div>
        <canvas id="canvas" width={w} height={h}></canvas>
        <canvas id="canvas"></canvas>
        <div id="imageArea"></div>
      </div>
    );
};

export default Camera;

