import React from "react";
import { Box, Typography, Grid, Button, Hidden } from "@mui/material";
import homeImg from "../../assets/home/homeImg.jpg";
import AnimationHouse from "../../components/Home/AnimationHouse";
import AnimationMobile from "../../components/Home/AnimationMobile";

export const HomeSection: React.FC = () => {
    return (
        <Box style={{ 
                height: '100%', 
                display:"flex", 
                flexDirection:"column", 
                alignItems:"center", 
                justifyContent:"center",
                margin: "10px 0"
            }} 
        >
            <Typography style={{ 
                            color: "#30ffd7", 
                            textAlign: "center", 
                            paddingTop: "20px",
                            paddingBottom: "50px"
                        }}  
                        variant="h2"
            >
                <span style={{ color: "black", fontWeight: "bold" }}>YourPl@y</span> time for Your relax
            </Typography>
            <Grid              
                style={{ 
                    width: "100%",
                    display:"flex", 
                    alignItems:"center",
                    justifyContent: "space-between", 
                }}
            >
                <Grid style={{ }} item xs={6}>
                    <Typography style={{ 
                                    fontWeight: "bold",
                                    letterSpacing: "10px",
                                }}
                                variant="h3"
                    >
                        Learn to have
                        <span> </span>    
                        <span style={{ transform: "rotate(30deg)", display: "inline-block", color:"#00fccc" }}>f</span>
                        <span style={{ transform: "rotate(-20deg)", display: "inline-block", color:"#00b895" }}>u</span>
                        <span style={{ transform: "rotate(20deg)", display: "inline-block", color:"#00745e" }}>n</span>
                    </Typography>
                    <Typography style={{ 
                                    letterSpacing: "10px", 
                                    marginTop: "20px"
                                }}
                                variant="h3"
                    >
                        with us
                    </Typography>
                    <Button style={{
                        background:"#6057f1",
                        padding: "20px 40px",
                        border: "none",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        color:"white",
                        marginTop: "50px",
                        fontSize: "20px"
                    }}>
                        Contact
                    </Button>
                    <Hidden smDown>
                        <Box sx={{
                            width: 700,
                            height: 300,
                            marginTop: 5,
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                            position: "relative"
                            }}
                        >
                            <AnimationHouse />
                        </Box>
                    </Hidden>
                </Grid>
                <Hidden smDown mdDown>
                    <Grid style={{ position:"relative" }} item xs={6}>
                        <img style={{  
                                width: "600px", 
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
                                padding: "20px", background: "#30ffd7", 
                                borderRadius: "10px"  
                            }} 
                            src={homeImg} alt="Home Image" />
                        <div style={{ 
                                width:"100px", 
                                height:"5px", 
                                background:"black", 
                                rotate: "90deg", 
                                position: "absolute",
                                top:"370px",
                                left: "250px"
                            }}
                        />
                        <div style={{ 
                                width:"300px", 
                                height:"5px", 
                                background:"black",  
                                position: "absolute",
                                top:"420px",
                                left: "150px"
                            }}

                        />
                        <div style={{ 
                                width:"50px", 
                                height:"5px", 
                                background:"black", 
                                rotate: "90deg",  
                                position: "absolute",
                                top:"443px",
                                left: "127px"
                            }}
                        />
                        <div style={{ 
                                width:"50px", 
                                height:"5px", 
                                background:"black", 
                                rotate: "90deg",  
                                position: "absolute",
                                top:"443px",
                                left: "427px"
                            }}
                        />
                        <Button style={{  
                                width:"100px",
                                position: "absolute",
                                top:"470px",
                                left: "102px",
                            }}
                                variant="contained"
                        >
                            Games
                        </Button>
                        <Button style={{  
                                width:"100px",
                                position: "absolute",
                                top:"470px",
                                left: "402px",
                            }}
                                variant="contained"
                        >
                            App
                        </Button>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <AnimationMobile />
                </Hidden>
            </Grid>
            <Hidden smUp>
                <Box sx={{
                    display: "flex",
                    marginTop: "150px",
                    width: "100%",
                    justifyContent: "space-between"
                }}>
                    <Button style={{  
                            width:"150px",
                        }}
                            variant="contained"
                    >
                        Games
                    </Button>
                    <Button style={{  
                            width:"150px",
                        }}
                            variant="contained"
                    >
                        App
                    </Button>
                </Box>
            </Hidden>
        </Box>
    )
}