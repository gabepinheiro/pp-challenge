import { Link, LinkProps } from 'components/link'

export const CustomLink = ({ href, children, ...rest }: LinkProps) => (
  <Link
    sx={{
      textDecoration: 'none',
      padding: '5px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '3px',
        backgroundColor: 'error.main',
        transform: 'scaleX(0)',
        transition: 'all 0.4s'
      },
      '&:hover::before': {
        transform: 'scaleY(1)'
      }
    }}
    href={href}
    {...rest}
  >
    {children}
  </Link>
)
