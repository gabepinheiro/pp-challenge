import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { NavBar } from 'components/nav-bar'
import { Character } from 'services/types-marvel'

import Image from 'next/image'

type CharacterTemplateProps = {
  character: Character
}

function CharacterTemplate({ character }: CharacterTemplateProps) {
  const urlImage = `${character.thumbnail.path}.${character.thumbnail.extension}`

  return (
    <>
      <NavBar />
      <Box
        component="section"
        sx={{
          backgroundColor: 'text.primary'
        }}
      >
        <Container
          sx={{
            maxWidth: '1300px',
            padding: '32px 0'
          }}
        >
          <Grid container columnSpacing={8}>
            <Grid item xs={12} lg={6}>
              <Image
                src={urlImage}
                height={450}
                width={850}
                objectFit="cover"
                objectPosition="top center"
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}
            >
              <Typography component="h1" variant="h3">
                {character.name}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="main">
        <Container
          sx={{
            maxWidth: '1300px',
            padding: '2rem 1rem',
            '& > *:not(:last-child)': {
              marginBottom: '42px'
            }
          }}
        >
          <Box component="section">
            <Typography component="h2" variant="h2" color="error.main">
              Description
            </Typography>
            <Typography
              component="p"
              variant="body1"
              mt={2}
              dangerouslySetInnerHTML={{ __html: character.description }}
            />
          </Box>

          <Box component="section">
            <Typography component="h2" variant="h2" color="error.main">
              Comics
            </Typography>
            <List>
              {character.comics.items.map((comic) => (
                <ListItem key={comic.name}>
                  <ListItemText>{comic.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section">
            <Typography component="h2" variant="h2" color="error.main">
              Stories
            </Typography>
            <List>
              {character.stories.items.map((story) => (
                <ListItem key={story.name}>
                  <ListItemText>{story.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section">
            <Typography component="h2" variant="h2" color="error.main">
              Events
            </Typography>
            <List>
              {character.events.items.map((event) => (
                <ListItem key={event.name}>
                  <ListItemText>{event.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box component="section">
            <Typography component="h2" variant="h2" color="error.main">
              Series
            </Typography>
            <List>
              {character.series.items.map((serie) => (
                <ListItem key={serie.name}>
                  <ListItemText>{serie.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export { CharacterTemplate }
