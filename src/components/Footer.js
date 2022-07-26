import React from "react";
// MUI
import { Box, Stack, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

// assets
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f9">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <img src={Logo} alt="Logo" width="200px" height="40px" />
                <Typography variant="h6" pb="10px" mt="20px" fontWeight="900">
                    2022 -  by Amir Sedaghat 
                </Typography>
                <Box position="relative" top="-20px">
                <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AmirSedaqat/Fitness-app.git"
                style={{color:'#000' , textDecoration:"none",padding:'15px 30px', border:"1px solid black",borderRadius:"10px",marginBottom:'50px'}}
                >
                    GitHub <GitHubIcon sx={{position:'relative',top:'2px'}}/>
                </a>    
                </Box>
            </Stack>
            
        </Box>
    );
};

export default Footer;
