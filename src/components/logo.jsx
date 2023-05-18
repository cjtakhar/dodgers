import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../images/dodgers.jpg';

const Logo = () => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  // const toggleAudio = () => {
  //   const audio = audioRef.current;
  //   if (isPlaying) {
  //     audio.pause();
  //     setIsPlaying(false);
  //   } else {
  //     audio.play();
  //     setIsPlaying(true);
  //   }
  // };

  // const handleAudioEnd = () => {
  //   setIsPlaying(false);
  // };

  const handleButtonClick = () => {
    navigate('/stats');
  };

  return (
    <div>
      <div>
      <img className="logo" src={LogoImage} alt="Dodgers Logo" />
      <audio ref={audioRef} src="/iloveLA.m4a" />
      </div>
      <div className="btn-enter-container">
        <button className="btn-enter" type="button" onClick={handleButtonClick}>I LOVE LA</button>
      </div>
    </div>
  );
};

export default Logo;