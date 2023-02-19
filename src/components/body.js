import { useState } from "react";
import "../styles/body.css"

function Body() {

    let [isPlaying, setIsPlaying] = useState(false)

    let playState = isPlaying ? "pause" : "play_arrow" 

    function handlePlay(){
        if(isPlaying){
            setIsPlaying(false)
        }
        else{
            setIsPlaying(true)
        }
    }

    return ( 
        <main>
            <div className="word">
                <h2>Keyboard</h2>
                <h3 id="phonetic">/kibcea/</h3>
                <button>
                    <i onClick={handlePlay} className="material-icons">{playState}</i>
                </button>
            </div>
            <div className="meaning">
            <span className="span"><h3 id="noun-title">noun</h3><hr/></span>
                  <h3 id="meaning-title">Meaning</h3>
                </div>
                <ul className="list noun">
                    <li><span>Lorem ipsum is a fooof oahuiw  akjaskja  akjhsfhbdjnn</span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
                <span id="synonyms"><h3>Synonyms</h3><h3 id="syn">Electric guitar</h3></span>
                <span className="span"><h3 id="noun-title">verb</h3><hr/></span>
                  <h3 id="meaning-title">Meaning</h3>
                  <ul className="list verb">
                    <li><span>Lorem ipsum is a fooof oahuiw  akjaskja  akjhsfhbdjnn</span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
        </main>
     );
}

export default Body;