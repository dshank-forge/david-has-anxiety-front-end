import "./Components.css";
import essay from "../images/essay.jpg";
import hand from "../images/by_my_own_hand.jpg";
import twister from "../images/WhirlwindGIF.gif";
import covid from "../images/Covid-ThoughtsGIF.gif";
import high from "../images/High-Times-FINAL.gif";
import beloved from "../images/Beloved.jpg";
import DavidHasAnxietyToken from "../chain-info/build/contracts/DavidHasAnxietyToken.json"; 
import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";

export const MintNFTModal = ( mintNFTProps ) => {

    const pictures = {
        0: {    
                "image": essay,
                "artist": "Mendo",
                "title": "Essay"
            },
        1: {    
            "image": covid,
            "artist": "Mendo",
            "title": "Covid Thoughts"
        },
        2: {    
            "image": twister,
            "artist": "Mendo",
            "title": "Whirlwind"
        },  
        3: {    
            "image": hand,
            "artist": "Mendo",
            "title": "By My Own Hand"
        },
        4: {    
            "image": high,
            "artist": "Mendo",
            "title": "High Times"
        }, 
        5: {    
            "image": beloved,
            "artist": "Mendo",
            "title": "Beloved"
        },  
        6: {    
            "image": essay,
            "artist": "Mendo",
            "title": "Placeholder"
        },
        7: {    
            "image": essay,
            "artist": "Mendo",
            "title": "Placeholder"
        },  
    }

    const address = "0xc8CdAa552401cf5C7AF9F5488c898C2f4C975Da4"
    const abi = DavidHasAnxietyToken
    // const myContract = new Contract(address, abi)

    // const myCall = {
    //     contract: myContract,
    //     method: 'helloWorld',
    //     args: []
    // }
    // const { value, error } = useCall( myCall )

    console.log(mintNFTProps)

    const selectedNFTindex = mintNFTProps['index']
    const selectedNFTImage = pictures[selectedNFTindex]["image"]

    const modalEnabled = mintNFTProps['modalEnabled']
    const setModalEnabled = mintNFTProps['setModalEnabled']
    

    const handleExit = () => {
        setModalEnabled(false)    
    }

    const testMint = () => {
        console.log('pressed the mint button') 
    }
    
    return (
        <> 
            { modalEnabled  &&
                <div className="mintNFTModal">
                    <div className="columnFlex">
                        <img src={selectedNFTImage} className="largeImage"></img>
                        <IconButton onClick={handleExit}>
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </div>
                    <div className="columnFlex">
                        <Button onClick={testMint} variant="contained">Test</Button>
                        <Button onClick={handleExit} variant="outlined">Exit</Button>
                        <p></p>
                        <div><b>Title:</b> <i>{pictures[selectedNFTindex]["title"]}</i></div>
                        <div><b>Artist:</b> {pictures[selectedNFTindex]["artist"]}</div>
                    </div>
                </div>
            }
        </>
    )
}