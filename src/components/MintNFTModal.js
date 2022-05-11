import "./Components.css";
import essay from "../images/essay.jpg";
import hand from "../images/by_my_own_hand.jpg";
import twister from "../images/WhirlwindGIF.gif";
import covid from "../images/Covid-ThoughtsGIF.gif";
import high from "../images/High-Times-FINAL.gif";
import { useState } from "react";
import { Button } from "@mui/material";
import { useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";

export const MintNFTModal = ( mintNFTProps ) => {
    
    const pictures = {
        0: essay, 
        1: covid, 
        2: twister, 
        3: hand, 
        4: high, 
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

    const testMint = () => {
        console.log('pressed the mint button') 
        const myContract = new Contract
        const myCall = {
            contract: myContract,
            method: 'helloWorld',
            args: []
        }
        // const { value, error } = useCall( myCall )
    }
    
    return (
        <> 
            { modalEnabled  &&
                <div className="mintNFTModal">
                    <img src={selectedNFTImage} className="largeImage"></img>
                    <Button onClick={testMint} variant="contained">Test Mint</Button>
                    <Button onClick={handleExit} variant="outlined">Exit</Button>
                </div>
            }
        </>
    )
}