import { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';

import './NavBar.scss';

// import sideBar
import Sidebar from '../Sidebar/SideBar';

interface NavbarProps { }


const NavBar: React.FC<NavbarProps> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const userAvatar = 'https://avatars.githubusercontent.com/u/100297463?v=4';

  return (
    <header>
      <Grid container style={{ width: '100%', height: '100%' }}>
        {/* Primera columna de 150px */}
        <Grid item xs={2} sm={2} className='buttonBar' onClick={toggleSidebar}>
          <MenuIcon />
          <Paper>
            <p>BOARDS</p>
          </Paper>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </Grid>

        {/* Segunda columna con ancho automático */}
        <Grid item xs={65} sm={5} className='isologoBar'>
          <Paper>
            <h4>Zz<span> Tasks</span></h4>
          </Paper>
        </Grid>

        {/* Tercera columna de 200px */}
        <Grid item xs={5} className='customBar'>
          <Paper className='BtnBoard' style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button size='small' className='BtnCreateBoard'>
              <ControlPointIcon style={{ fontSize: '17px' }} /> Create
            </Button>
          </Paper>

          <Paper className='profileBar'>
            <Stack direction="row" spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: '600' }}>
              <Avatar alt="Remy Sharp" sx={{ width: 26, height: 26 }} src={userAvatar} />
              <span>Remy Sharp</span>
            </Stack>
          </Paper>

          <Paper className='NotiBar' style={{ width: '200px' }}>
            <Box sx={{ color: 'action.active' }}>
              <Badge color="secondary" variant="dot">
                <NotificationsNoneIcon />
              </Badge>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </header>
  )
}

export default NavBar
