import React from "react";
// MUI
import { Stack, Typography } from "@mui/material";

// assets
import icon from "../assets/icons/gym.png";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            className="bodyPart-card"
            alignItems="center"
            justifyContent="center"
            sx={{
                borderTop: bodyPart === item ? "4px solid #ff2625" : "",
                backgroundColor: "#fff",
                width: "270px",
                height: "280px",
                cursor: "pointer",
                borderBottomLeftRadius: "20px",
                gap: "47px",
            }}
            flexWrap="nowrap"
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            }}
        >
            <img src={icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
            <Typography color="#3a1212" fontSize="24px" fontWeight="bold" textTransform="capitalize">
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;
