import React, { useRef, useState } from 'react';
const VideoWithText = () => {
  const videoRef = useRef(null);
  const [showThumbnail, setShowThumbnail] = useState(true);

  const handlePlay = () => {
    videoRef.current.play();
    setShowThumbnail(false);
  };

  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-1/2 object-cover' src='https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4'
        autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0'></div>
        <div className='absolute top-0 w-full h-1/2 flex flex-col justify-center items-center text-center text-white text-[56px]'><h1>Welcome to Royal Group</h1></div>
    </div>
  );
};

export default VideoWithText;
