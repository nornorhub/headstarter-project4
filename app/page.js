import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Grid
} from '@mui/material'
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text"/>
      </Head>
      <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" style={{flexGrow: 1}}>
      Flashcard SaaS
    </Typography>
    <SignedOut>
      <Button color="inherit" href="/sign-in">Login</Button>
      <Button color="inherit" href="/sign-up">Sign Up</Button>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </Toolbar>
</AppBar>

<Box sx={{textAlign: 'center', my: 4}}>
  <Typography variant="h2" component="h1" gutterBottom>
    Welcome to Flashcard SaaS
  </Typography>
  <Typography variant="h5" component="h2" gutterBottom>
    The easiest way to create flashcards from your text.
  </Typography>
  <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
    Get Started
  </Button>
  <Button variant="outlined" color="primary" sx={{mt: 2}}>
    Learn More
  </Button>
</Box>

<Box sx={{my: 6, textAlign: 'center'}}>
  <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
  <Grid container spacing={4} justifyContent="center">
    <Grid item xs={12} md={4}>
      <Box sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 2,
      }}>
        <Typography variant="h5" gutterBottom>Basic Plan</Typography>
        <Typography variant="h6" gutterBottom>$5 / month</Typography>
        <Typography>
          {' '}
          Access to basic features
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>
          Choose Basic
        </Button>
      </Box>
    </Grid>
  </Grid>
</Box>
    </Container>
  );
}
