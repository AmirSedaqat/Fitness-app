import React, { useState, useEffect } from "react";

// MUI
import { Box, Stack, Button, TextField, Typography } from "@mui/material";

// Fetch Data
import { exerciseOptions, fetchData } from "../utils/fetchData";
// Import components
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises , bodyPart , setBodyPart}) => {

    // State
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    // Effect
    useEffect(() => {
        const fetchDataExercise = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

            setBodyParts(["all", ...bodyPartsData]);
        };

        fetchDataExercise();
    }, []);
    // Function
    const handelSearch = async () => {
        if (search) {
            const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
            const searchedExercises = exercisesData.filter(
                (item) =>
                    item.name.toLowerCase().includes(search) ||
                    item.bodyPart.toLowerCase().includes(search) ||
                    item.equipment.toLowerCase().includes(search) ||
                    item.target.toLowerCase().includes(search)
            );
            window.scrollTo({ top: 1500, left: 100, behavior: "smooth" });
            setSearch("");
            setExercises(searchedExercises);
        }
    };

    return (
        <Stack alignItems="center" mt="40px" justifyContent="center" p="20px">
            <Typography fontWeight={700} fontSize={{ lg: "44px", xs: "30px" }} mb="50px" textAlign="center">
                Awesome Exercise You <br />
                Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                    }}
                    type="text"
                    placeholder="Search Exercises ..."
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "4px",
                        },
                        width: { lg: "800px", xs: "350px" },
                        borderRadius: "40px",
                        backgroundColor: "#fff",
                    }}
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "#ff2526",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "55px",
                        position: "absolute",
                        right: "0",
                    }}
                    onClick={handelSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{position:'relative' , width:'100%' , p:'20px'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
