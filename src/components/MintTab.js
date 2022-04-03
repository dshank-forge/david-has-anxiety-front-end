import {useState} from "react";
import {useEthers} from '@usedapp/core';
import {Button, Card} from "@mui/material";
import "./Components.css";
import { MintNFTModal } from "./MintNFTModal";
import essay from "../images/essay.jpg";
import hand from "../images/by_my_own_hand.jpg";
import twister from "../images/WhirlwindGIF.gif";
import covid from "../images/Covid-ThoughtsGIF.gif";

export const MintTab = () => {

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

   const [imageClass, setImageClass] = useState("smallImage")   
   const [modalEnabled, setModalEnabled] = useState(false)
   const [selectedNFTIndex, setSelectedNFTIndex] = useState(0)

   const enlargeImage = (e) => {
      const image = e.target
      image.className = "largeImage"
   }

   const shrinkImage = (e) => {
      const image = e.target
      image.className = "smallImage"
   }

   // const toggleModal = () => {
   //    // console.log(e.target.id)
   //    setModalEnabled(!modalEnabled)
   // }

   const handleNFTClick = (e) => {
      setSelectedNFTIndex(e.target.id)
      setModalEnabled(true)
   }

   const {account, activateBrowserWallet, deactivate} = useEthers()

   const isConnected = account !== undefined


   // Try NFT container as a 4x2, increasing space between as needed when you expand it to a bigger box

   return (
      <div>
         { isConnected ?
            <Button variant="contained" color="secondary" size="large" 
               onClick={ () => alert('You minted an NFT!') }>
               Mint
            </Button>
            :
            <Button variant="contained" color="secondary" size="large" disabled>
               Mint
            </Button>
         }

         <MintNFTModal index={selectedNFTIndex} modalEnabled={modalEnabled} setModalEnabled={setModalEnabled}/>

         <div className='nftsContainer'>
            { 
               Object.entries(pictures).map( (entry) => 
                  <div key={entry[0]}>
                     <img id={entry[0]} src={entry[1]}
                        className="smallImage" 
                        onMouseOver={enlargeImage} 
                        onMouseOut={shrinkImage}
                        onClick={handleNFTClick}>
                     </img>
                  </div>
               )
            }
         </div>
      </div>
   )
}