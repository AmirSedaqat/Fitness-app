import React from "react";

// MUI
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ youtubeVideos, name }) => {
    if(!youtubeVideos.length) return 'Loading ...'
    return (
        <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
            <Typography variant="h3" mb="40px">
                Watch <span style={{ color: "#ff2625", textTransform: "capitalize",fontWeight:"700"  }}>{name}</span> exercise videos in <span style={{ color: "#ff2625", textTransform: "capitalize",fontWeight:"700" }}>YouTube</span>
            </Typography>
            <Stack justifyContent="flex-start" alignItems="center" flexWrap="wrap"
                sx={{
                    flexDirection:{lg:"row"},
                    gap:{lg:"110px",xs:'0'}
                }}
            >
                {
                    youtubeVideos?.slice(0,3).map((item,index)=>(
                        <a  key={index}
                            className="exercise-video"
                            target="_blank"
                            rel="noreferrer"
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        >
                            <img  src={item.video.thumbnails[0].url} alt={item.video.title}/>
                            <Box>
                                <Typography variant="h5" color="#000">
                                    {item.video.title}
                                </Typography>
                                <Typography variant="subtitle1" color="#000">
                                     - {item.video.channelName} -
                                </Typography>
                            </Box>
                        </a>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;
