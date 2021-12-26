import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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