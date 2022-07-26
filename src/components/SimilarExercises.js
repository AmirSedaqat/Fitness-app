import React from "react";

// MUI
import { Box, Stack, Typography } from "@mui/material";

// Imports components
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
            <Typography variant="h3" m="50px" fontWeight="bold">
                Similar <span style={{ color: "#ff2625" }}>Target Muscle</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: "2", position: "relative" }}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </Stack>

            <Typography variant="h3" m="50px" fontWeight="bold">
                Similar <span style={{ color: "#ff2625" }}>Equipment</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: "2", position: "relative" }}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;
