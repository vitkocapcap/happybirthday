import React from 'react';
import audio from './audio.mp3';

const Audio =()=>{
    return(
        <div>
            <audio autoPlay="true">
                <source type="audio/mp3" src={audio}/>
            </audio>
        </div>
        
    );
}

export default Audio;