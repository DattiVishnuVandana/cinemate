import { useEffect, useState } from "react";
export const useFetch = (apiPath,queryTerm="") => {
const url=`https://api.themoviedb.org/3/${apiPath}?api_key=b80d59c33d6d57ed9c7e3713f91c188a&query=${queryTerm}`
const [data,setData]=useState([])

     useEffect(()=>{
        async function fetchMovies() {
          const res=await fetch(url);
        const data=await res.json();
        setData(data.results);
        }
        fetchMovies();
      },[url])
  return {data}
}
