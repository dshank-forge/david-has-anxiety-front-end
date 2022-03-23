import {useEthers} from '@usedapp/core';
import {Button, Card} from "@mui/material";
import "./Components.css";
import essay from "../images/essay.jpg";
import hand from "../images/by_my_own_hand.jpg"
import twister from "../images/WhirlwindGIF.gif"

const pictures = [ essay, hand, twister, essay, essay, essay, essay, essay]

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
                  <div>
                     <img src={picture}></img>
                  </div>
               )
            }
         </div>
      </div>
   )
}