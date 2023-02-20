import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#f6ccff",
}));

function App() {
  return (
    <Container>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "end" }}>
          <Typography variant="h1">Hello</Typography>
          <Typography variant="h2">Hello</Typography>
          <Typography variant="subtitle1">Hello</Typography>
          <Typography variant="subtitle2">Hello</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained primary button</Button>
          <Button variant="contained" color="success">
            Secondary Button
          </Button>
          <Button variant="outlined" color="primary" disableRipple>
            Contained outlined button
          </Button>
          <StyledButton variant="outlined" color="secondary">
            Styled button
          </StyledButton>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Fab color="primary">
            <AddIcon />
          </Fab>
          <Fab color="primary" size="medium" variant="square">
            <AddIcon />
          </Fab>
          <Fab color="primary" size="small">
            <AddIcon />
          </Fab>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
