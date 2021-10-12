import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { CharacterCard } from 'ui/character-card/'
import { NavBar } from 'components/nav-bar'

import { characters } from 'resources/mocks/character-mock'

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
            {characters.map((char) => (
              <Grid item xs={12} md={6} lg={3} key={char.name}>
                <CharacterCard {...char} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export { HomeTemplate }
