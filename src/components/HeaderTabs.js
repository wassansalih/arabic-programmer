import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import LinuxTab from "./linux/LinuxTab";
import JavascriptTab from "./javascript/JavascriptTab";

function TabPanel(props) {
    // eslint-disable-next-line
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 4 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function HeaderTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const style = {
        // width: "100%",
        bgcolor: "background.paper",
    };

    return (
        <Box sx={style}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
                textColor="secondary"
                indicatorColor="secondary"
            // style={{ float: "right" }}
            >
                <Tab label="Linux" />
                <Tab label="Java script" />
                <Tab label="Node js" />
                <Tab label="React" disabled />
                <Tab label="Vue" disabled />
                <Tab label="Java" disabled />
                <Tab label="Spring boot" />


            </Tabs>
            <TabPanel value={value} index={0}>
                <LinuxTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <JavascriptTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item 2
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Six
            </TabPanel>
        </Box >
    );
}