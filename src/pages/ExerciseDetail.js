import React, { useState, useEffect } from "react";
// Router-dom
import { useParams } from "react-router-dom";

// MUI
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

// Import components
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
    // State
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [youtubeVideos, setYoutubeVideos] = useState([]);

    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    
    // Router-dom
    const { id } = useParams();

    // Effect
    useEffect(() => {
        const fetchExercisesData = async () => {
            // fetch ExerciseDetail
            const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
            const exercisesDetailData = await fetchData(`${exercisesDbUrl}/exercises/exercise/${id}`, exerciseOptions);

            setExerciseDetail(exercisesDetailData);

            // fetch videos from Youtube
            const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
            const youtubeVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exercisesDetailData.name}` , youtubeOptions);
            console.log(youtubeVideosData)
            setYoutubeVideos(youtubeVideosData.contents);

            // TargetMuscleExercise
            const targetMuscleExercisesData = await fetchData(`${exercisesDbUrl}/exercises/target/${exercisesDetailData.target}`,exerciseOptions)
            setTargetMuscleExercises(targetMuscleExercisesData)
            // EquipmentExercise
            const equipmentExercisesData = await fetchData(`${exercisesDbUrl}/exercises/equipment/${exercisesDetailData.equipment}`,exerciseOptions)
            setEquipmentExercises(equipmentExercisesData);

        };

        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos youtubeVideos={youtubeVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    );
};

export default ExerciseDetail;
