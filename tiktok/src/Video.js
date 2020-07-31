import React, {useRef, useState} from 'react'
import './video.css'
import VideoFooter from './VideoFooter';

function Video() {
    //do that the video can load when we tap it
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPressed = (e) => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }else{
            videoRef.current.play();
            setPlaying(true)
        }
    }
    return (
        <div className="video">
            <video className="video__player"
            loop
            ref = {videoRef}
            onClick={onVideoPressed}
            src="https://v19.tiktokcdn.com/ff1b9d41cf0417d19e27ed0d68cf32b6/5f2439dd/video/n/v0102/31b35c07b3494ab3a2d9174d5440d253/?a=1180&br=3396&bt=1698&cr=0&cs=0&dr=3&ds=3&er=&l=20200731093310010189036023180BBFC6&lr=tiktok&mime_type=video_mp4&qs=0&rc=anJnd242djo7cjMzZjgzM0ApOzVoaTk4OmU3N2RlNzdnZ2dnbC4xYWheai9fLS1hLzRzc2BfNV8vMTVgXl4zLV4wLi06Yw%3D%3D&vl=&vr="></video>
            <VideoFooter/>
        </div>
    )
}

export default Video
