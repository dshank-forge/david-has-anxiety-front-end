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
            <div className="sideBySide">
               <Card classname="left"><img src={byMyOwnHand}/></Card>
               <div className="right">David had compulsive thoughts about his fingers getting cut 
               off.</div>
            </div>
            <div className="sideBySide">
               <Card><img src={essay}/></Card>
               <div className="imageDesc">David had academic anxiety.</div>
            </div>
            <div className="sideBySide">
               <Card>NFT 3</Card>
               <div className="imageDesc">David had a panic attack when he got high.</div>
            </div>
            <div className="sideBySide">
               <Card>NFT 4</Card>
               <div className="imageDesc">Karmala and Sonamla welcomed David into their home.</div>
            </div>
            <div className="sideBySide">
               <Card><img src={whirlwind}></img></Card>
               <div className="imageDesc">David felt like he was in a dream- like the world was 
               sliding away.</div>
            </div>
            <div className="sideBySide">
               <Card>NFT 6</Card>
               <div className="imageDesc">David had a hard time stopping washing his hands.</div>
            </div>
            <div className="sideBySide">
               <Card>NFT 7</Card>
               <div className="imageDesc">David learned that he had a special Hebrew name.</div>
            </div>
            <div className="sideBySide">
               <Card>NFT 8</Card>
               <div className="imageDesc">David worries compulsively about things in 
               his appartment.</div>
            </div>    
         </Stack>

      </div> 
   )
}