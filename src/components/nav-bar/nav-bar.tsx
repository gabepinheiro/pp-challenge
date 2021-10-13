import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import MenuList from '@mui/material/MenuList'
import { Logo } from 'ui/logo'
import { CustomLink } from 'ui/custom-link'

export const NavBar = () => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: 'text.primary'
    }}
  >
    <Toolbar>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '48px'
        }}
      >
        <Logo />
        <MenuList
          sx={{
            alignSelf: 'stretch'
          }}
        >
          <CustomLink href="/">Characters</CustomLink>
        </MenuList>
      </Box>
    </Toolbar>
  </AppBar>
)
