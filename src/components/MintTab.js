import {useEthers} from '@usedapp/core';
import {Button, Card} from "@mui/material";
import "./Components.css";
import essay from "../images/essay.jpg";
import hand from "../images/by_my_own_hand.jpg"
import twister from "../images/WhirlwindGIF.gif"

const pictures = [ essay, hand, twister, essay, essay, essay, essay, essay]

export const MintTab = () => {

   const image1 = document.getElementById('image1');
   
   image1.addEventListener('mouseover', () => {
      enlarge();
   });
   
   function enlarge() {
      // Event.preventDefault();
      console.log('enlarge');
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

         <div className='nftsContainer'>
            { 
               pictures.map( (picture, i) => 
                  <div key={i}>
                     <img src={picture} id={`image${i}`}></img>
                  </div>
               )
            }
         </div>
      </div>
   )
}