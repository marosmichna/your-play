import { Box, Button, Grid, Typography, useMediaQuery, useTheme, Hidden } from '@mui/material';
import React from 'react';



export const YourIdeaSection: React.FC = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box style={{
            margin: "20px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}
    >
        <Typography
            variant={isMobile ? "h4" : "h2"}
            style={{
                fontWeight: "bold",
                letterSpacing: "5px",
                width: "80%",
            }}
        >    
            If you have an idea or a thought or something similar, write to me.
        </Typography>
        <Button 
            style={{
                background:"#6057f1",
                padding: "20px 40px",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                color:"white",
                marginTop: "50px",
                fontSize: "20px",
                width: "300px"
            }}
        >
            Write to me
        </Button>
        <Box>
            <Grid container spacing={2}  marginTop={5}>
                <Grid 
                    item 
                    xs={12} 
                    sm={4} 
                    style={{ 
                        textAlign: "center",
                        display:"flex",
                        justifyContent: "center",

                    }}
                >
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#30ffd7",
                        padding: "10px",
                        width: "300px",
                        height: "200px",
                        borderRadius: "10px"
                    }}
                >
                    <Typography
                        variant="h4"
                        style={{ marginBottom: "10px" }}
                    >
                        YourGame
                    </Typography>
                    <Typography>  
                        If you have an idea for game improvement or an idea for a new game, share it with us.
                    </Typography>
                </Box>
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    sm={4} 
                    style={{ 
                        textAlign: "center",
                        display:"flex",
                        justifyContent: "center",
                    }}
                >
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        background: "#30ffd7",
                        padding: "10px",
                        width: "300px",
                        height: "200px",
                        borderRadius: "10px",
                    }}
                >
                    <Typography
                        variant="h4"
                        style={{ marginBottom: "10px" }}
                    >
                        YourApp
                    </Typography>
                    <Typography>  
                        If you have an idea and need an app, write us and we'll definitely come up with something together.
                    </Typography>
                </Box>
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    sm={4} 
                    style={{ 
                        textAlign: "center",
                        display:"flex",
                        justifyContent: "center",
                    }}
                >
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#30ffd7",
                        padding: "10px",
                        width: "300px",
                        height: "200px",
                        borderRadius: "10px"
                    }}
                >
                    <Typography
                        variant="h4"
                        style={{ marginBottom: "10px" }}
                    >
                        YourIdea
                    </Typography>
                    <Typography>  
                        Whatever you wanted, you needed to know how to write. We'll figure it out together :-)
                    </Typography>
                </Box>
                </Grid>
                
            </Grid>
            <Box
                style={{
                    textAlign: "center",
                    marginTop: "50px",
                    fontSize: "50px",
                    color: "white"
                }}
            >
                <Hidden smDown>
                    ------------------------------------------------------------
                </Hidden>
                
            </Box>
        </Box>
    </Box>
  )
}


