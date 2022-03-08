// import "./ArtContainer";
import {Stack, Card} from "@mui/material";
import "./Components.css";
import essay from "../images/essay.jpg";
import byMyOwnHand from "../images/by_my_own_hand.jpg";
import whirlwind from "../images/WhirlwindGIF.gif";

export const DavidsStoryTab = () => {
   return ( 
      <div>
         <Stack spacing={2} ml="10%">
            <div>
               <Card><img src={byMyOwnHand}/></Card>
               <div className="imageDesc">David had compulsive thoughts about his fingers getting cut 
               off.</div>
            </div>
            <div>
               <Card><img src={essay}/></Card>
               <div className="imageDesc">David had academic anxiety.</div>
            </div>
            <div>
               <Card>NFT 3</Card>
               <div className="imageDesc">David had a panic attack when he got high.</div>
            </div>
            <div>
               <Card>NFT 4</Card>
               <div className="imageDesc">Karmala and Sonamla welcomed David into their home.</div>
            </div>
            <div>
               <Card><img src={whirlwind}></img></Card>
               <div className="imageDesc">David felt like he was in a dream- like the world was 
               sliding away.</div>
            </div>
            <div>
               <Card>NFT 6</Card>
               <div className="imageDesc">David had a hard time stopping washing his hands.</div>
            </div>
            <div>
               <Card>NFT 7</Card>
               <div className="imageDesc">David learned that he had a special Hebrew name.</div>
            </div>
            <div>
               <Card>NFT 8</Card>
               <div className="imageDesc">David worries compulsively about things in 
               his appartment.</div>
            </div>    
         </Stack>

      </div> 
   )
}