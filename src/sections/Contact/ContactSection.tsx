import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



export const ContactSection: React.FC = () => {
 
  const [state, handleSubmit] = useForm("xrgwreog");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (state.succeeded) {
    return <Typography
                variant={isMobile ? "h4" : "h2"}
                style={{
                    fontWeight: "bold",
                    letterSpacing: "5px",
                    width: "80%",
                    maxWidth: "100%",
                    textAlign: "center",
                    height: "100%",
                    color: "white",
                    margin: "auto",
                }}
            >
                Thanks for your message
            </Typography>;
    }

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
            Contact us 
        </Typography>
        <Typography
            variant="h6"
            style={{
                color: "white",
                marginTop: "10px",
                letterSpacing: "10px",
            }}
        >
            Write anything you want to know
        </Typography>
        <Box
            style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                width: "100%"
            }}
        >
            <form
                onSubmit={handleSubmit}
                // onSubmit={handleSubmit((data) => setFormData(JSON.stringify(data)))}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: isMobile ? "300px" : "500px"
                }}
            >
                <input 
                    // {...register("firstName", { required: true })} 
                    placeholder="First name *"
                    id="firstName"
                    name="firstName"
                    style={{
                        margin: "5px 0px",
                        padding: "10px 10px",
                        border: "none",
                        borderRadius: "5px",
                        outline: "none",
                    }}
                />
                <input 
                    // {...register("secondName", { required: true })} 
                    placeholder="Second name *"
                    id="secondName"
                    name="secondName"
                    style={{
                        margin: "5px 0px",
                        padding: "10px 10px",
                        border: "none",
                        borderRadius: "5px",
                        outline: "none"
                    }}
                />
                <input 
                    // {...register("email", { required: true })} 
                    placeholder="Email *"
                    id="email"
                    type="email" 
                    name="email"
                    style={{
                        margin: "5px 0px",
                        padding: "10px 10px",
                        border: "none",
                        borderRadius: "5px",
                        outline: "none"
                    }}
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <input 
                    // {...register("phoneNumber")} 
                    placeholder="Phone number"
                    id="phoneNumber"
                    name="phoneNumber"
                    style={{
                        margin: "5px 0px",
                        padding: "10px 10px",
                        border: "none",
                        borderRadius: "5px",
                        outline: "none"
                    }}
                />
                <select 
                    // {...register("founder", { required: true })} 
                    id="select"
                    name="select"
                    style={{
                        margin: "5px 0px",
                        padding: "10px 10px",
                        border: "none",
                        borderRadius: "5px",
                        outline: "none"
                    }}
                >
                    <option value="">Select founder</option>
                    <option value="anakin">Anakin</option>
                    <option value="luke">Luke</option>
                </select>
                <textarea
                    // {...register("textArea", { required: true })} 
                    id="message"
                    name="message"
                    placeholder="Whatever you w@nt *"
                    style={{
                        margin: "5px 0px",
                        padding: "10px 10px",
                        border: "none",
                        borderRadius: "5px",
                        outline: "none",
                        height: "200px"
                    }} 
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                {/* <input 
                    type="submit"
                    value="Submit" 
                    style={{
                        margin: "5px 0px",
                        padding: "10px 10px",
                        border: "none",
                        borderRadius: "5px",
                        outline: "none",
                        background:"#6057f1",
                        color: "white",
                        cursor: "pointer",
                    }}
                /> */}
                <button 
                    type="submit" 
                    disabled={state.submitting}
                    style={{
                        margin: "5px 0px",
                        padding: "10px 10px",
                        border: "none",
                        borderRadius: "5px",
                        outline: "none",
                        background:"#6057f1",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </form>
        </Box>
    </Box>
  )
}


