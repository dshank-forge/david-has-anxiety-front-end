import {useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Tab} from "@mui/material";
import './Components.css';
import { LovingKindnessTab } from "./LovingKindnessTab";
import { MintTab } from "./MintTab";
import { DavidsStoryTab } from "./DavidsStoryTab";
import { HomeTab } from "./HomeTab";
import { Header } from "./Header";

export const Main = () => {
    const handleChange = (event, newValue) => {
        console.log(newValue)
        setSelectedTabIndex(newValue)
    }

    const [selectedTabIndex, setSelectedTabIndex] = useState(0)

    // Try adding black lines between tabs to make it look like a folder 

    return(
        <Box className="mainBox">
            <Header/>
            <TabContext value={selectedTabIndex.toString()}>
                <TabList onChange={handleChange}>
                    <Tab label="Home" value="0" key="0" />
                    <Tab label="David's Story" value="1" key="1" />
                    <Tab label="Mint" value="2" key="2" />
                    <Tab label="Loving Kindness ❤️" value="3" key="3" />
                </TabList>
                <TabPanel value={selectedTabIndex.toString()} key={selectedTabIndex}>
                    {
                        {
                            '0': <HomeTab/>,
                            '1': <DavidsStoryTab/>,
                            '2': <MintTab/>,
                            '3': <LovingKindnessTab/>
                            
                        }[selectedTabIndex.toString()]
                    }
                </TabPanel>
            </TabContext>
        </Box>
    )

}