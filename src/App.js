import * as React from "react";
import Grid from "@mui/material/Grid";
import HeaderTabs from "./components/HeaderTabs";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          marginLeft: "5px",
          direction: "rtl",
        },
        container: {
          width: "99%",
          marginTop: "10px",
          paddingLeft: "15px",
          paddingRight: "2px",
          border: "1px solid blue"
        },

      }
    }
  },
});

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
        <Grid xs={3}>
          <item>
            <h3>The Arabic Programmer</h3>
          </item>
        </Grid>
        <Grid xs={12} MuiGrid>
          <item>
            <h4>The Arabic Programmer description xxxxxxxx</h4>
          </item>
        </Grid>

        <Grid item xs={12}>
          {/* <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          > */}
          <Grid>
            <HeaderTabs />
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </ThemeProvider>


  );
}

export default App;
