import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { CharacterCard } from 'ui/character-card/'
import { NavBar } from 'layout/nav-bar'

import { Character } from 'services/types-marvel'

type HomeTemplateProps = {
  characters: Character[]
}

function HomeTemplate({ characters }: HomeTemplateProps) {
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
            {characters.map(({ id, name, thumbnail }) => (
              <Grid item xs={12} md={6} lg={3} key={id}>
                <CharacterCard id={id} name={name} thumbnail={thumbnail} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export { HomeTemplate }
