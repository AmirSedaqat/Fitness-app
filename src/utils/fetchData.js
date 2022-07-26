export const fetchData = async (url, options) => {
    const responsive = await fetch(url, options);
    const data = await responsive.json();

    return data;
};
export const exerciseOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": 'cf41cf58e6msh423a60c6bf8485fp180c36jsn1b28cbf22853',
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};
export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};
