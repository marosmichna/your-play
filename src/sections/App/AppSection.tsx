import { Box, Grid, Typography } from "@mui/material";
import FotballImg from "../../assets/app/Football.png";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FolderIcon from '@mui/icons-material/Folder';
import AuthorAnakin from "../../assets/about/Anakin.jpg"
import AppCard from "../../components/App/AppCard";


export const AppSection: React.FC = () => {

  

  return (
    <Box style={{
        margin: "20px 0",
    }}>
        <Typography
            style={{
                fontWeight: "bold",
            }}
            variant="h2"
        >
            Discover <span style={{ color: "#30ffd7" }}>App</span> from YourPl@y
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop={5}>
            <Grid item>
                <AppCard
                    appPrice="Free"
                    favorite= {5}
                    appTitle="Sport Review"
                    appText="Do you have your own team?"
                    appImg = {FotballImg}
                    difficultyIcons={<LightbulbIcon color="primary" />}
                    difficultyText="Smart"
                    appTypeIcons={<FolderIcon color="primary" />}
                    appTypeText="Storage"
                    authorImg={AuthorAnakin}
                    authorName= "Anakin Skywalker"
                    appLink=""
                 />
            </Grid>
        </Grid>
    </Box>
  )
}

