import { useNavigate } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const VideoPlayerWrapper = () => {
  const navigate = useNavigate();

  const handleCerrar = () => {
    navigate(-1); 
  };

  return <VideoPlayer onClose={handleCerrar} />;
};

export default VideoPlayerWrapper;