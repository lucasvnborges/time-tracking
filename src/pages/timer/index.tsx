import { Container, Grid } from "@mui/material";

// components
import Page from "@components/Page";
import Header from "./Header";

export default function GeneralApp() {
  return (
    <Page title="title">
      <Container maxWidth={false} disableGutters>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Container>
    </Page>
  );
}
