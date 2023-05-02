import React, { useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";
import { meal } from "../../constants";

const Intro = () => {
  const vidRef = React.useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div>
      <video
        style={{ height: "100vh", width: "100%", objectFit: "cover" }}
        className="app__video"
        src={meal}
        ref={vidRef}
        type="video/mp4"
        Loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#ffff" fontSize={30} />
          ) : (
            <BsPlayFill color="#ffff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
