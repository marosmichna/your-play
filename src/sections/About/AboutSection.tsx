import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material"
import FounderCard from "../../components/About/FounderCard";
import AnakinImg from "../../assets/about/Anakin.jpg";
import LukeImg from "../../assets/about/Luke.jpg";

export const AboutSection: React.FC = () => {

    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <Box height="100%"  py={4}>
            <Typography 
                fontWeight="bold" 
                textAlign="center" 
                variant="h2"
            >
                What is the YourPl@y ?
            </Typography>
            <Typography
                color="white"
                width={isMobile ? "80%" : "50%"}
                textAlign="center"
                margin="30px auto"
            > 
                YourPlay is mainly for entertainment. There are many games from simple to more complex. There is also an opportunity to try out applications, or to design your own games and applications. The site will grow every day and we believe that you will find a lot of fun here.
            </Typography>
            <Typography 
                textAlign="center"
                variant="h3">
                Founders
            </Typography>
            <Grid style={{ 
                    width: "100%",
                    display:"flex", 
                    alignItems:"center",
                    justifyContent: "space-between", 
                    marginTop: isMobile? "20px" : "50px",
                    flexDirection: isMobile ? "column" : "row",
                }}
            >
                <Grid item xs={6}
                    style={{
                        width: "90%"
                    }}
                >
                    <FounderCard  
                        img = {AnakinImg}
                        aboutMe="Anakin. 
                        I enjoy programming applications and creating games. I am very patient in my work and I see every task to the end."
                    />
                </Grid>
                <Grid item xs={6}
                    style={{
                        width: "90%"
                    }}
                >
                    <FounderCard  
                        img = {LukeImg}
                        aboutMe="Luke. 
                        Programming is my life. He devotes all my time to it. I used to program robots and drones, but now I'm working purely on applications. If you need anything, contact me. May the force accompany you."
                    />
                </Grid>
            </Grid>
        </Box>
    )
}