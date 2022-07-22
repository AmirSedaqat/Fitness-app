import React from "react";
// Styles
import "./App.css";
// Router-dom
import { Routes, Route } from "react-router-dom";

// MUI
import { Box } from "@mui/material";

// Import components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    );
};
export default App;
