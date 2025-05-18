import { Routes,Route } from "react-router-dom";
import { MovieDetail,MovieList,Search,PageNotFound } from "../pages";
import React from 'react'

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}></Route>
        <Route path="movies/:id" element={<MovieDetail/>}></Route>
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>}></Route>
        <Route path="movies/top" element={<MovieList  apiPath="movie/top_rated"/>}></Route>
        <Route path="movies/upcoming" element={<MovieList  apiPath="movie/upcoming"/>}></Route>
        <Route path="search" element={<Search/>}></Route>
       <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </>
  )
}
