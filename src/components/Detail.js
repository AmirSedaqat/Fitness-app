import React from "react";
// MUI
import { Typography, Stack, Button } from "@mui/material";

// assets
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
    const { gifUrl, bodyPart, equipment, name, target } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
                <Typography variant="h3">{name}</Typography>
                <Typography variant="h6">
                    Exercise keep you strong. {name}
                    is one of the best exercises to target your {target}. It will help you improve your mood and gain energy
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} gap="24px" direction="row" alignItems="center">
                        <Button sx={{ backgroundColor: "rgba(255, 147, 147,0.2)", p: "25px", borderRadius: "35%" }}>
                            <img src={item.icon} alt={item.name} style={{ width: "50px", height: "50px" }} />
                        </Button>
                        <Typography variant="h5" textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail;
