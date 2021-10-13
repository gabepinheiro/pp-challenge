import { styled } from '@mui/material/styles'
import { Button, ButtonProps } from '@mui/material'

export const CustomButton = styled(Button)<ButtonProps>(
  ({ theme, color = 'error' }) => ({
    color: '#fff',
    backgroundColor: theme.palette[color].main,
    borderRadius: '20px',
    transition: 'all .4s',
    position: 'relative',
    paddingLeft: '10px',
    paddingRight: '10px',

    '&:hover': {
      transform: 'translateY(-3px)',
      backgroundColor: theme.palette[color].main,
      boxShadow: theme.shadows[8]
    },

    '&:active': {
      transform: 'translateY(-1px)',
      backgroundColor: theme.palette[color].main
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette[color].main,
      boxShadow: theme.shadows[5],
      borderRadius: '20px',
      zIndex: -1,
      transition: 'all .4s'
    },

    '&:hover::after': {
      opacity: 0,
      transform: 'scaleX(1.4) scaleY(1.6)'
    }
  })
)
