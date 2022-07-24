import React, { useState } from "react";
// MUI

// Import components
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
const Home = () => {
    // State
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    return (
        <div>
            <HeroBanner />
            <SearchExercises 
                bodyPart={bodyPart} 
                setBodyPart={setBodyPart} 
                setExercises={setExercises} />
            <Exercises
                bodyPart={bodyPart} 
                setBodyPart={setBodyPart} 
                setExercises={setExercises}
             />
        </div>
    );
};

export default Home;
