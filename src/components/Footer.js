import React from "react";
// MUI
import { Box, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

// assets
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f9">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <img src={Logo} alt="Logo" width="200px" height="40px" />
                <Typography variant="h6" pb="40px" mt="20px" fontWeight="900">
                    2022 - by Amir Sedaghat <FavoriteIcon />
                </Typography>
                
            </Stack>
        </Box>
    );
};

export default Footer;
