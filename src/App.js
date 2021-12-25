import Grid from '@mui/material/Grid';
import HeaderTabs from "./components/HeaderTabs";
import Javascript from './components/javascript/Javascript';
import Linux from './components/linux/Linux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { display } from '@mui/system';

const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          textAlign: "right",
          marginLeft: "5px",
        },
        container: {
          width: "99%",
          // marginLeft: "5px",
          marginTop: "10px",
          paddingLeft: "15px",
          paddingRight: "2px",
          border: "1px solid blue"
        },

      }
    },
    MuiTabs: {
      flexContainer: {
        float: "right"
      }
    }
    // MuiBox: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "red",
    //       border: " 5px solid red",
    //       maxWidth: "60%"
    //     }
    //   }
    // }

    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '1rem',
    //     },
    //   },
    // },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid xs={3}>
          <item>
            <p>The Arabic Programmer</p>
          </item>
        </Grid>
        <Grid xs={12} MuiGrid>
          <item>
            <p>The Arabic Programmer description xxxxxxxx</p>
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
