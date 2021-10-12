import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import * as S from './styles'

import { Character } from 'services/types-marvel'
import { useRouter } from 'next/router'

export type CharacterCardProps = Pick<Character, 'id' | 'name' | 'thumbnail'>

function CharacterCard({ id, name, thumbnail }: CharacterCardProps) {
  const router = useRouter()

  return (
    <Card sx={S.Card}>
      <Box component="div" sx={S.ContainerCardMedia}>
        <CardMedia
          component="img"
          height="100%"
          image={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          sx={{
            objectFit: 'cover',
            objectPosition: 'top center'
          }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="error"
          onClick={() => router.push(`/character/${id}`)}
          title={name}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  )
}

export { CharacterCard }
