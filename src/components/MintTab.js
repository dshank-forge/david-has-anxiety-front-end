// import {useEthers, useEtherBalance} from '@usedapp/core';
import {Button, Card} from "@mui/material";
import "./Components.css";
import essay from "../images/essay.jpg";


// Mint Button
// 1. Disabled if metamask is not connected 
// 2. Enabled if metamask is connected 


export const MintTab = () => {
   return (
   <div>
      <Button variant="contained" color="secondary" size="large">
         Mint
      </Button>
      <Card>
         <img src={essay}></img>
      </Card>
   </div>
   )
}