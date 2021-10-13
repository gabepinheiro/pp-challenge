export const Card = {
  marginTop: '1.5rem',
  backgroundColor: 'text.primary',
  color: 'white',
  transition: 'transform .3s',
  paddingBottom: '8px',
  '&:hover': {
    boxShadow: '0 10px 20px rgba(0,0,0, 0.2)',
    transform: 'translateY(-5px)'
  },
  '&:active': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 10px rgba(0,0,0, 0.2)'
  }
}

export const ContainerCardMedia = {
  width: '100%',
  height: '190px',
  borderBottom: '3px solid red'
}
