import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import { Logo } from 'ui/logo'

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
            display: 'flex',
            flexWrap: 'wrap',
            flex: '1'
          }}
        >
          <MenuItem>
            <Typography variant="overline" component="span">
              Characters
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="overline" component="span">
              Movies
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="overline" component="span">
              Series
            </Typography>
          </MenuItem>
        </MenuList>
      </Box>
    </Toolbar>
  </AppBar>
)
