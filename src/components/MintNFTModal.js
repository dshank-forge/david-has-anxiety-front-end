import "./Components.css";
import essay from "../images/essay.jpg";
import hand from "../images/by_my_own_hand.jpg";
import twister from "../images/WhirlwindGIF.gif";
import covid from "../images/Covid-ThoughtsGIF.gif";
import { useState } from "react";

export const MintNFTModal = ( mintNFTProps ) => {
    
    const pictures = {
        0: essay, 
        1: covid, 
        2: twister, 
        3: hand, 
        4: essay, 
        5: essay, 
        6: essay, 
        7: essay 
    }

    console.log(mintNFTProps)

    const selectedNFTindex = mintNFTProps['index']
    const selectedNFTImage = pictures[selectedNFTindex]

    const modalEnabled = mintNFTProps['modalEnabled']
    const setModalEnabled = mintNFTProps['setModalEnabled']
    

    const handleExit = () => {
        setModalEnabled(false)    
    }
    
    return (
        <> 
            { modalEnabled  &&
                <div className="mintNFTModal">
                    <img src={selectedNFTImage} className="largeImage"></img>
                    <button onClick={handleExit}>Exit</button>
                </div>
            }
        </>
    )
}