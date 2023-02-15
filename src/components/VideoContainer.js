import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API }from "../utils.js/content"
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async() => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json  = await data.json();
            console.log(json);
            setVideos(json.items);
  
  };
  if(videos.length>0){
    return (
    
      <div>
        <VideoCard info={videos[0]} />
  
      </div>
    );

    } else {
return null;
    }
  };
export default VideoContainer;
