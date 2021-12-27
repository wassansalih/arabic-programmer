import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import LinuxTab from "../linux/LinuxTab";
import JavascriptTab from "../javascript/JavascriptTab";
// import NodeJsTab from "../nodejs/NodeJsTab";
// import ReactTab from "../react/ReactTab";
import TabPanel from "./TapPanels";

export default function HeaderTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: "background.paper" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab label="Linux" />
                <Tab label="Java script" id="javascriptTab"/>
                {/* <Tab label="Node js" />
                <Tab label="React" />
                <Tab label="Vue" disabled />
                <Tab label="Java" disabled />
                <Tab label="Spring boot" /> */}
            </Tabs>

            <TabPanel value={value} index={0}>
                <LinuxTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <JavascriptTab />
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
                <NodeJsTab />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ReactTab />
            </TabPanel> */}

        </Box >
    );
}