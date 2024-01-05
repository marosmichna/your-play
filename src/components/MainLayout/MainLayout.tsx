import { Box, AppBar, Toolbar } from '@mui/material'
import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import logoImg from "../../assets/LogoNav/yourPlayLogo.png"
import { Navigation } from './Navigation/Navigation';

export type MainLayoutProps = {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {



  return (
    <Box height="100vh">
        <AppBar position='fixed'>
          <Toolbar>
            <Box flexGrow={1}>
              <AnchorLink>
                <Box>
                  <img height="50px" src={logoImg} alt="Logo" />
                </Box>
              </AnchorLink>
            </Box>
            <Navigation/>
          </Toolbar>
        </AppBar>
        <Box>
          <Toolbar />
          {children}
        </Box>
    </Box>
  )
}

export default MainLayout