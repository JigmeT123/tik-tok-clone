import React from 'react'
import './videofooter.css'
import Ticker from 'react-ticker'
import MusicNoteIcon from '@material-ui/icons/MusicNote'

function VideoFooter() {
    return (
        <div className="videoFooter">
           <div className="videoFooter__text">
                <h3>@JigmeTashi</h3>
                <p>This is a description</p>
                <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon"/>
                <Ticker mode="smooth">
                    {
                        ({index}) => (
                            <>
                            <p>YOOO whats up</p>
                            </>
                        )
                    }
                </Ticker>
                </div>
                
           </div>
           
           <img className="videoFooter__logo" src="https://static.thenounproject.com/png/934821-200.png" alt="spining_image" />


        </div>
    )
}

export default VideoFooter
