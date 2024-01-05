import { Box, Grid, Typography } from "@mui/material";
import GameCard from "../../components/Games/GameCard";
import HangmanImg from "../../assets/games/hangman.jpg";
import SignalCellular1BarIcon from '@mui/icons-material/SignalCellular1Bar';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AuthorAnakin from "../../assets/about/Anakin.jpg"



export const GamesSection: React.FC = () => {

  

  return (
    <Box style={{
        margin: "20px 0",
        }}
    >
        <Typography
            style={{
                fontWeight: "bold",
            }}
            variant="h2"
        >
            Discover <span style={{ color: "#30ffd7" }}>Games</span> from YourPl@y
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop={5}>
            <Grid item>
                <GameCard
                    gamePrice="Free"
                    favorite= {5}
                    gameTitle="Hangman"
                    gameText="You can not hang him?"
                    gameImg = {HangmanImg}
                    difficultyIcons={<SignalCellular1BarIcon color="primary" />}
                    difficultyText="Easy"
                    gameTypeIcons={<PsychologyAltIcon color="primary" />}
                    gameTypeText="Logical"
                    authorImg={AuthorAnakin}
                    authorName= "Anakin Skywalker"
                    gameLink="your-hangman-ibuq2npua-marosmichna.vercel.app"
                 />
            </Grid>
        </Grid>
    </Box>
  )
}

