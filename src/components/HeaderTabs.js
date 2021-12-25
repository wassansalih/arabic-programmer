import * as React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import Linux from './linux/Linux';
import Javascript from './javascript/Javascript';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{marginTop: "20px", float: "right"}}
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
        bgcolor: 'background.paper',
        border: "5px solid green",
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
                style={{float: "right"}}
            >
                <Tab label="Spring boot" />
                <Tab label="Vue" disabled />
                <Tab label="React" disabled hidden />
                <Tab label="Java" disabled />
                <Tab label="Node js" />
                <Tab label="Java script" />
                <Tab label="Linux" />


            </Tabs>
            <TabPanel value={value} index={6}>
                <Linux />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Javascript />
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={0}>
                Item Seven
            </TabPanel>
        </Box >
    );
}