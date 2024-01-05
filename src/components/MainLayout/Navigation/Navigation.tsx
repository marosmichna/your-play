import AnchorLink from "react-anchor-link-smooth-scroll"
import { LayoutSectionIdEnum } from "../../../types"
import { Box, Button, Hidden, IconButton, Dialog, AppBar, Toolbar, Typography, Slide } from "@mui/material"
import { Menu, Close } from "@mui/icons-material"
import React, { useState } from "react"


const navigationItems = [
    {
        text: "Home",
        to: LayoutSectionIdEnum.home,
    },
    {
        text: "About",
        to: LayoutSectionIdEnum.about,
    },
    {
        text: "Games",
        to: LayoutSectionIdEnum.games,
    },
    {
        text: "App",
        to: LayoutSectionIdEnum.app,
    },
    {
        text: "YourIdea",
        to: LayoutSectionIdEnum.yourIdea,
    },
    {
        text: "Contact",
        to: LayoutSectionIdEnum.contact,
    },
]

const Transition = React.forwardRef((
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => {
    return <Slide direction="left" ref={ref} {...props} />;
  });


export const Navigation: React.FC = () => {

    const [open, setOpen] = useState(false)

    const onOpenHandler = () => {
        setOpen(true)
    }

    const onCloseHandler = () => {
        setOpen(false)
    }

    const mappedItems = (
        navigationItems.map(({ text, to }) => {
            return (
                <AnchorLink key={to} href={`#${to}`}>
                    <Button style={{ color: "white" }} color="inherit" size="large" onClick={onCloseHandler}>
                        {text}
                    </Button>
                </AnchorLink>
            )
        })
    )

    return (
        <>
            <Hidden smDown>
                <Box>
                    {mappedItems}
                </Box>
            </Hidden>
            <Hidden smUp>
                <IconButton onClick={onOpenHandler}>
                    <Menu />
                </IconButton>
                <Dialog
                    open={open}
                    fullScreen
                    fullWidth
                    TransitionComponent={Transition}
                    hideBackdrop
                >
                    <AppBar position="static" >
                        <Toolbar>
                            <Typography variant="h5" sx={{ flexGrow: 1 }}>
                                Menu
                            </Typography>
                            <IconButton onClick={onCloseHandler}>
                                <Close />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Box bgcolor="#6057f1" display="flex" flexDirection="column" alignItems="center" py={3}  width="100%">
                        {mappedItems}
                    </Box>
                </Dialog>
            </Hidden>
        </>
    )
}