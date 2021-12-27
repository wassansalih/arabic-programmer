import React from "react";
import Grid from "@mui/material/Grid";
import HeaderTabs from "./components/headerTabs/HeaderTabs";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/App.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-end"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12}>
          <item>
            <h3 id="mainTitle">المبرمج العربي</h3>
          </item>
        </Grid>
        <Grid item xs={12} MuiGrid>
          <item>
            <h4 id="secondaryTitle">The Arabic Programmer description will be here</h4>
          </item>
        </Grid>

        <Grid item xs={12}>
          <Grid>
            <HeaderTabs />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;
