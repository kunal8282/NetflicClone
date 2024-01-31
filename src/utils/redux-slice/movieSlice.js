import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name : 'movie',
    initialState : {},
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlaying = action.payload;
        },  
        addPopularMovies : (state, action) => {
            state.popular = action.payload;
        },
        addtopRatedMovies : (state, action) => {
            state.topRated = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcoming = action.payload;
        },
        addTrendingMovies : (state, action) => {
            state.trending = action.payload;
        }
    }
})

export const {addPopularMovies,addNowPlayingMovies,addUpcomingMovies,addtopRatedMovies, addTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer;