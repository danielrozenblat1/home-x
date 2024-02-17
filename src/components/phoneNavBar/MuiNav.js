import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import image2 from "../../images/home-x logo.png";
import { Link as ScrollLink } from "react-scroll";

const drawerWidth = 240;
const navItems = ['לקוחות ממליצים', 'קצת עלי', 'צור קשר'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,150,0,0.8711134111847865) 100%)' }}>
      <Typography variant="h6" sx={{ fontFamily: 'Rubik', color: '#000' }}>
        <img src={image2} alt="Logo" style={{ width: '80%', objectFit: 'cover', zIndex: 999 }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ScrollLink to={item} smooth={true} duration={1500} offset={-150}> <ListItemText onClick={handleDrawerToggle} primary={item} sx={{ fontFamily: 'Rubik', color: '#000' }} /></ScrollLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.querySelector('body') : undefined;

  return (
    <>
      <style>
        {`
          body {
            background-color: black;
            margin: 0;
            color: rgba(0, 0, 0, 0.87);
            font-family: "Roboto","Helvetica","Arial",sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5;
            letter-spacing: 0.00938em;
          }
          .MuiPaper-root.MuiAppBar-root {
            background-color: black; /* Set background color to black for AppBar */
          }
          .MuiDrawer-root {
            background-color: none; /* Set background color to black for Drawer */
          }
          .css-k008qs {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row-reverse;
            height: 60px; /* Adjusted height */
          }
        `}
      </style>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,129,0,1) 100%)', boxShadow: 'none' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#000' }}
            >
              <img src={image2} alt="Logo" style={{ width: '15%', objectFit: 'cover', zIndex: 999, marginRight: '20px' }} />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#000', fontFamily: 'RubikR', fontSize: 20, marginRight: '35px' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;