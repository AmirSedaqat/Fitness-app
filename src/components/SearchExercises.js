import React, { useState, useEffect } from "react";

// MUI
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
const SearchExercises = () => {
    

    return <Stack alignItems="center" mt="40px" justifyContent="center" p="20px">
        <Typography fontWeight={700} fontSize={{lg:'44px',xs:'30px'}}
        mb="50px" textAlign="center"
        >
            Awesome Exercise You <br/>
            Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField

                height='76px'
                value=''
                onChange={(e)=>{}}
                placeholder="Search Exercises ..."
                sx={{
                    input:{
                        fontWeight:'700',
                        border:'none',
                        borderRadius:'4px'
                        },
                    width:{lg:"800px",xs:'350px'},
                    borderRadius:"40px",
                    backgroundColor:'#fff',

                }}
            />
            <Button className="search-btn" 
            sx={{
                bgcolor:"#ff2526",
                color:'#fff',
                textTransform:"none",
                width:{lg:'175px',xs:'80px'},
                fontSize:{lg:'20px',xs:'14px'},
                height:'55px',
                position:'absolute',
                    right:'0'
                }}
            >
                Search 
            </Button>
        </Box>
    </Stack>;
};

export default SearchExercises;
