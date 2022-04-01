import {useState} from "react";
import {useEthers} from '@usedapp/core';
import {Button, Card} from "@mui/material";
import "./Components.css";
import { SinglePiece } from "./SinglePiece";
import essay from "../images/essay.jpg";
import hand from "../images/by_my_own_hand.jpg";
import twister from "../images/WhirlwindGIF.gif";

const pictures = [ essay, hand, twister, essay, essay, essay, essay, essay]

export const MintTab = () => {

   const [imageClass, setImageClass] = useState("smallImage")   

   const enlargeImage = (e) => {
      // console.log(e.target)
      // console.log(largeImage)
      const image = e.target

      image.className = "largeImage"

      // console.log(image)
      // if (largeImage) {
      //    console.log('image is large')
      // } else {
      //    console.log('image is small')
      // }
   }

   const shrinkImage = (e) => {
      const image = e.target

      image.className = "smallImage"

      // console.log('shrink')
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

         <SinglePiece />

         <div className='nftsContainer'>
            { 
               pictures.map( (picture, i) => 
                  <div key={i}>
                     <img src={picture} id={`image${i}`}
                        className="smallImage" 
                        onMouseOver={enlargeImage} 
                        onMouseOut={shrinkImage}>
                     </img>
                  </div>
               )
            }
         </div>
      </div>
   )
}