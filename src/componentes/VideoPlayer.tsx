import { useEffect, useRef, useState } from "react";
import styles from "../styles/VideoPlayer.module.css";

type VideoPlayerProps = {
  onClose: () => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    return () => {
      videoRef.current?.pause();
    };
  }, []);

  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();
  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setSliderValue(0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setSliderValue(videoRef.current.currentTime);
    }
  };

  const handleLoad = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setSliderValue(value);
    if (videoRef.current) {
      videoRef.current.currentTime = value;
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.playerContainer}>
        <video
          ref={videoRef}
          autoPlay
          className={styles.video}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoad}
        />
        <input
          type="range"
          min={0}
          max={duration}
          value={sliderValue}
          onChange={handleSliderChange}
          className={styles.slider}
        />
        <div className={styles.timeDisplay}>
          {sliderValue.toFixed(1)} / {duration.toFixed(1)} segundos
        </div>
        <div className={styles.controls}>
          <button onClick={handlePlay}>▶️ Reproducir</button>
          <button onClick={handlePause}>⏸️ Pausar</button>
          <button onClick={handleStop}>⏹️ Detener</button>
          <button onClick={onClose}>❌ Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;