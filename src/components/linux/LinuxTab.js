import * as React from "react";

import { Grid } from "@mui/material";
// import { useState } from "react";
import LinuxContents from "./LinuxContents";
import LinuxTitles from "./LinuxTitles";

export default function LinuxTab() {
    // const [selectedTitle, setSelectedTitle] = useState("title 1");
    
    return (
        <Grid 
        container
        direction="row"
        justifyContent="start-end"
        alignItems="center"
        spacing={1}>
            <Grid item xs={3}>
                <LinuxTitles />
            </Grid>
            <Grid item xs={8}>
                <LinuxContents />
            </Grid>
        </Grid>
    );
}