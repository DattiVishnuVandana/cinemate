import { useEffect, useState } from "react"
import { Card } from "../components/Card"
export const MovieList = () => {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    async function fetchMovies() {
      const res=await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=b80d59c33d6d57ed9c7e3713f91c188a");
    const data=await res.json();
    setMovies(data.results);
    }
    fetchMovies();
  },[])
  return (
<main>
  <section className="max-w-7xl mx-auto py-7">
    <div className='flex justify-start flex-wrap'>

{movies.map((movie)=>(
<Card key={movie.id} movie={movie}/>
))}


    </div>
  </section>
</main>
  )
}
