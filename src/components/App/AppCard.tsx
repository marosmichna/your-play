import "./AppCard.css";
import { Box, Card, CardContent, Typography, Grid, CardActions } from '@mui/material';
import React from 'react';
import StarIcon from "@mui/icons-material/Star";


export type AppCardProps = {
    appPrice: string,
    favorite: number,
    appTitle: string,
    appText: string,
    appImg: string,
    difficultyIcons: React.ReactNode,
    difficultyText: string,
    appTypeIcons: React.ReactNode,
    appTypeText: string,
    authorImg: string,
    authorName: string,
    appLink: string,
}

const AppCard: React.FC<AppCardProps> = ({ 
    appPrice, 
    favorite, 
    appTitle, 
    appText, 
    appImg, 
    difficultyIcons,
    difficultyText,
    appTypeIcons,
    appTypeText,
    authorImg,
    authorName,
    appLink,
}) => {

    const stars = Array.from({ length: favorite }, (_, index) => (
        <StarIcon key={index} color="primary" />
      ))

  return (
    <Card sx={{ 
            width: 300,
            height: 450, 
            padding: "10px", 
            marginTop: "20px",
            boxShadow: "-5px 0px 5px 0px rgba(96,87,241,1), 5px 0px 5px 0px rgba(96,87,241,1)",
            background: "rgb(227, 213, 240)"
        }}
    >
        <CardContent>
            <Box style={{
                    display: "flex",
                    width: "full",
                    justifyContent: "space-between",
                    alignItems:"center",
                }}
            >
                <Typography style={{
                                background: "rgba(96,87,241,1) 0%",
                                color: "white",
                                padding: "10px 20px",
                                borderRadius: "10px"
                    }}
                >
                    {appPrice}
                </Typography>
                <Box>
                    {stars}
                </Box>
            </Box>
            <Box>
                <Typography
                    variant='h4'
                    style={{
                        marginTop: "20px",
                        textAlign: "center",
                        color: "rgba(96,87,241,1)",
                    }}
                >
                    {appTitle}
                </Typography>
                <Typography style={{
                                marginTop: "10px",
                                textAlign: "center",
                             }}
                >
                    {appText}
                </Typography>
                <img 
                    src={appImg} 
                    alt="Game Image"
                    style={{
                        display: "flex",
                        width: "70px",
                        height: "70px",
                        margin: "20px auto",
                    }}
                />
            </Box>
            <Box style={{
                    margin: "20px 0"
                }}
            >
                <Grid style={{
                        display: "flex",
                        width: "90%",
                        justifyContent: "space-between",
                        alignItems:"center",
                        margin: "0px auto",
                    }}
                >
                    <Grid style={{
                            display: "flex",
                            alignItems:"center",
                            justifyContent: "flex-start",
                        }}
                            xs={6}
                    >
                        <Typography>
                            {difficultyIcons}
                        </Typography>
                        <Typography>
                            {difficultyText}
                        </Typography>
                    </Grid>
                    <Grid style={{
                            display: "flex",
                            alignItems:"center",
                            justifyContent: "flex-end",
                        }}
                            xs={6}
                    >
                        <Typography>
                            {appTypeIcons}
                        </Typography>
                        <Typography>
                            {appTypeText}
                        </Typography>
                    </Grid> 
                </Grid>
            </Box>
            <Box style={{
                    display: "flex",
                    alignItems:"center",
                    justifyContent: "center",

                }}
            >
                <img
                    src={authorImg} 
                    alt=" Author's Image" 
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "20px"
                    }}
                />
                <Typography>
                    {authorName}
                </Typography>
            </Box>
        </CardContent>
        <CardActions>
            <Box style={{
                    display: "flex",
                    width: "100%",
                    alignItems:"center",
                    justifyContent: "space-between",

                }}
            >
            <a 
                href={`https://${appLink}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-play"
            >
                Demo
            </a>
            <button
                className="btn-detail"
            >
                Detail
            </button>
            </Box>
        </CardActions>
    </Card>
  )
}

export default AppCard;
