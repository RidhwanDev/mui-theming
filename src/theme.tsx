import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, purple, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    },
    success: {
      main: purple[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          borderRadius: 20,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "large" && {
            width: 100,
            height: 100,
          }),
        }),
      },
      defaultProps: {
        size: "medium",
      },
      variants: [
        {
          props: { variant: "square" },
          style: {
            borderRadius: 10,
          },
        },
      ],
    },
  },
});

export default responsiveFontSizes(theme);
