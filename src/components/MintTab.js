import {useEthers} from '@usedapp/core';
import {Button, Card} from "@mui/material";
import "./Components.css";
import essay from "../images/essay.jpg";
import hand from "../images/by_my_own_hand.jpg"
import twister from "../images/WhirlwindGIF.gif"

const pictures = [ essay, hand, twister, essay, essay, essay, essay, essay]


// NFT thumbnails / art
// 1. Create a flex box to contain all 8 pieces
// 2. A flex box tries to fit everything on one line, have it wrap the pieces onto multiple lines if needed 
// 3. Use horizontal as the main axis and vertical as the cross axis 


export const MintTab = () => {
   const {account, activateBrowserWallet, deactivate} = useEthers()

   const isConnected = account !== undefined

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
         <div className='nftsContainer'>
            { 
               pictures.map( (picture, i) => 
                  <img src={picture}></img>
               )
            }
         </div>
      </div>
   )
}