import {useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Tab} from "@mui/material";
import './Components.css';
import { LovingKindnessTab } from "./LovingKindnessTab";
import { MintTab } from "./MintTab";
import { DavidsStoryTab } from "./DavidsStoryTab";
import { Header } from "./Header";

export const Main = () => {
    const handleChange = (event, newValue) => {
        console.log(newValue)
        setSelectedTabIndex(newValue)
    }

    const [selectedTabIndex, setSelectedTabIndex] = useState(1)

    // Try adding black lines between tabs to make it look like a folder 

    return(
        <Box className="mainBox">
            <Header/>
            <TabContext value={selectedTabIndex.toString()}>
                <TabList onChange={handleChange}>
                    <Tab label="Mint" value="0" key="0" />
                    <Tab label="David's Story" value="1" key="1" />
                    <Tab label="Loving Kindness ❤️" value="2" key="2" />
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