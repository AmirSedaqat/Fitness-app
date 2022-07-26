import React from "react";
// MUI
import { Button, Stack, Typography } from "@mui/material";

// Router-dom
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className="exercise-card">
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row" mt="10px">
                <Button
                    sx={{
                        ml: "20px",
                        fontSize: "14px",
                        color: "#fff",
                        backgroundColor: "#ffa9a9",
                        textTransform: "capitalize",
                        borderRadius: "20px",
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: "20px",
                        fontSize: "14px",
                        color: "#fff",
                        backgroundColor: "#fb9a1b",
                        textTransform: "capitalize",
                        borderRadius: "20px",
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography sx={{ m: "30px 20px", color: "#000", fontSize: "22px", fontWeight: "700", pb: "20px", textTransform: "capitalize" }}>{exercise.name}</Typography>
        </Link>
    );
};

export default ExerciseCard;
