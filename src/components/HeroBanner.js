import React from "react";
// MUI
import { Box, Stack, Typography, Button } from "@mui/material";

// assets
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" },
            }}
            position="relative"
            p="20px"
        >
            <Typography color="#ff2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: "44px", xs: "40px" },
                }}
                margin="30px 0"
            >
                Sweat , Smile <br />
                and Repeat
            </Typography>

            <Typography fontSize="20px" lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant="contained" color="error" href="#exercises"
            sx={{
                backgroundColor:"#ff2625",
                padding:'15px',
                fontSize:'15px'
            }}
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={700}
                color="#ff2625"
                sx={{
                    opacity: ".2",
                    display: { lg: "block", xs: "none" },
                }}
                fontSize="200px"
            >
                EXERCISE
            </Typography>
            <img src={HeroBannerImage} alt="HeroBannerImage" className="hero-banner-img" />
        </Box>
    );
};

export default HeroBanner;
