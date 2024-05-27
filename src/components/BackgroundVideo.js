import React from "react";
import "./Background.css";

const BackgroundVideo = () => {
  return (
    <div class="banner">
      <video
        id="0fa58a14-6969-320d-8eb2-4b389944489e-video"
        autoplay="true"
        loop="true"
        muted="true"
        playsinline="true"
        data-wf-ignore="true"
        data-object-fit="cover"
      >
        <source
          src="https://assets-global.website-files.com/66018e6989d33d79f2d87480/660194b6e06bc323b1ab3f9e_Sequence 01_1-transcode.mp4"
          data-wf-ignore="true"
        />
        <source
          src="https://assets-global.website-files.com/66018e6989d33d79f2d87480/660194b6e06bc323b1ab3f9e_Sequence 01_1-transcode.webm"
          data-wf-ignore="true"
        />
      </video>
      {/* <div className="gradient"></div> */}
      <div class="content">
        <h1>Love Blooms in Goa</h1>
        <p>Best event wedding planners</p>
        <a href="https://wa.me/+919823291463">Get Quote</a>
      </div>
    </div>
  );
};

export default BackgroundVideo;
