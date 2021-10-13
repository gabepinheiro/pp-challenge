import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CustomButton } from 'ui/custom-button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import * as S from './styles'

import { Character } from 'services/types-marvel'
import { Link } from 'components/link'

export type CharacterCardProps = Pick<Character, 'id' | 'name' | 'thumbnail'>

function CharacterCard({ id, name, thumbnail }: CharacterCardProps) {
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
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link href={`/character/${id}`} sx={{ textDecoration: 'none' }}>
          <CustomButton size="small" color="error" title={name}>
            Learn more
          </CustomButton>
        </Link>
      </CardActions>
    </Card>
  )
}

export { CharacterCard }
