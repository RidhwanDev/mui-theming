import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
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
            width: 60,
            height: 60,
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
            borderRadius: 20,
          },
        },
      ],
    },
  },
});

export default responsiveFontSizes(theme);
