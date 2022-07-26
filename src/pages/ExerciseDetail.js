import React, { useState, useEffect } from "react";
// Router-dom
import { useParams } from "react-router-dom";

// MUI
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

// Import components
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
            const exercisesDetailData = await fetchData(`${exercisesDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            
            setExerciseDetail(exercisesDetailData);
        };

        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    );
};

export default ExerciseDetail;
