import React,{useState} from 'react';
// MUI

// Import components
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
const Home = () => {

    return (
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
            <HeroBanner/>
            <SearchExercises/>
            <Exercises/>
        </div>
    );
};

export default Home;