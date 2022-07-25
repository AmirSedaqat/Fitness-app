import React, { useState, useEffect } from "react";
// MUI
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

// Import components
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    // State
    const [currentPage , setCurrentPage]=useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercise = exercises.slice(indexOfFirstExercise , indexOfLastExercise);
    
    // Function 
    const paginate =(e,value)=>{
        setCurrentPage(value);
        window.scrollTo({top:1800,behavior:"smooth"})
    }


    return (
        <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
            <Typography variant="h3" m="0 0 60px 0">Showing Results</Typography>
            <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap="wrap" justifyContent="center">
                {currentExercise.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))
                }
            </Stack>
            <Stack mt="100px" alignItems="center"> 
            {exercises.length > 9 && 
                <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    /> 
            }
                    
                </Stack>
        </Box>
    );
};

export default Exercises;
