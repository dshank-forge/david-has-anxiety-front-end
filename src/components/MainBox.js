import {useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Tab} from "@mui/material";
import './MainBox.css';
import { LovingKindnessTab } from "./LovingKindnessTab";
import { MintTab } from "./MintTab";
import { DavidsStoryTab } from "./DavidsStoryTab";

export const MainBox = () => {
    const handleChange = (event, newValue) => {
        console.log(newValue)
        setSelectedTabIndex(newValue)
        // switch (newValue) {
        //     case 0:
        //         return <MintTab/>
        //     case 1: 
        //         return <DavidsStoryTab/>
        //     case 2: 
        //         return <LovingKindnessTab/>
        //     default:
        //         return null
        // }
    }
    const [selectedTabIndex, setSelectedTabIndex] = useState(0)

    return(
        <Box className="testBox">
            <TabContext value={selectedTabIndex.toString()}>
                <TabList onChange={handleChange}>
                    <Tab label="Mint" value="0" key="0" />
                    <Tab label="David's Story" value="1" key="1" />
                    <Tab label="Loving Kindness" value="2" key="2" />
                </TabList>
                <TabPanel value={selectedTabIndex.toString()} key={selectedTabIndex}>
                    {
                        {
                            '0': <MintTab/>,
                            '1': <DavidsStoryTab/>,
                            '2': <LovingKindnessTab/>,
                        }[selectedTabIndex.toString()]
                    }
                </TabPanel>
            </TabContext>
        </Box>
    )

}