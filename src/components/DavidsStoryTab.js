// import "./ArtContainer";
import {Stack, Card} from "@mui/material";
import "./Components.css";
import essay from "../images/essay.jpg";
import hand from "../images/by_my_own_hand.jpg";
import twister from "../images/WhirlwindGIF.gif";
import covid from "../images/Covid-ThoughtsGIF.gif";
import high from "../images/High-Times-FINAL.gif";
import beloved from "../images/Beloved.jpg";

export const DavidsStoryTab = () => {
   return ( 
      <div>
         <Stack spacing={2} ml="10%">
            <div className="sideBySide">
               <Card className="left"><img src={hand}/></Card>
               <div className="right">David had compulsive thoughts about his fingers getting cut off. </div>
            </div>
            <div className="sideBySide">
               <Card><img src={essay}/></Card>
               <div className="imageDesc">David had academic anxiety.</div>
            </div>
            <div className="sideBySide">
               <Card><img src={high}/></Card>
               <div className="imageDesc">David had a panic attack when he got high.</div>
            </div>
            <div className="sideBySide">
               <Card>Story from 2018: coming soon...</Card>
               <div className="imageDesc">Karmala and Sonamla welcomed David into their home.</div>
            </div>
            <div className="sideBySide">
               <Card><img src={twister}></img></Card>
               <div className="imageDesc">David felt like he was in a dream- like the world was 
               sliding away.</div>
            </div>
            <div className="sideBySide">
               <Card><img src={covid}/></Card>
               <div className="imageDesc">David had a hard time stopping washing his hands.</div>
            </div>
            <div className="sideBySide">
               <Card><img src={beloved}/></Card>
               <div className="imageDesc">David learned that he had a special Hebrew name.</div>
            </div>
            <div className="sideBySide">
               <Card>Story from 2022: coming soon...</Card>
               <div className="imageDesc">David worries compulsively about things in 
               his appartment.</div>
            </div>    
         </Stack>

      </div> 
   )
}