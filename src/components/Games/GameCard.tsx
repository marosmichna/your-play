import "./GameCard.css";
import { Box, Card, CardContent, Typography, Grid, CardActions } from '@mui/material';
import React from 'react';
import StarIcon from "@mui/icons-material/Star";


export type GameCardProps = {
    gamePrice: string,
    favorite: number,
    gameTitle: string,
    gameText: string,
    gameImg: string,
    difficultyIcons: React.ReactNode,
    difficultyText: string,
    gameTypeIcons: React.ReactNode,
    gameTypeText: string,
    authorImg: string,
    authorName: string,
    gameLink: string,
}

const GameCard: React.FC<GameCardProps> = ({ 
    gamePrice, 
    favorite, 
    gameTitle, 
    gameText, 
    gameImg, 
    difficultyIcons,
    difficultyText,
    gameTypeIcons,
    gameTypeText,
    authorImg,
    authorName,
    gameLink,
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
                    {gamePrice}
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
                    {gameTitle}
                </Typography>
                <Typography style={{
                                marginTop: "10px",
                                textAlign: "center",
                             }}
                >
                    {gameText}
                </Typography>
                <img 
                    src={gameImg} 
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
                        margin: "0px auto"
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
                            {gameTypeIcons}
                        </Typography>
                        <Typography>
                            {gameTypeText}
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
                href={`https://${gameLink}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-play"
            >
                Play
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

export default GameCard
