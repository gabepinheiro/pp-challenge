import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { NavBar } from 'components/nav-bar'

function HomeTemplate() {
  return (
    <>
      <NavBar />
      <Box component="main" sx={{ minHeight: '100vh' }}>
        <Container
          sx={{
            maxWidth: '1300px',
            marginTop: '32px'
          }}
        >
          <Grid container columnSpacing={8}>
            <Grid item xs={12} md={6} lg={3}>
              <Paper>
                <h1>Tony Stark</h1>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper>
                <h1>Tony Stark</h1>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper>
                <h1>Tony Stark</h1>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper>
                <h1>Tony Stark</h1>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export { HomeTemplate }
