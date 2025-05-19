
import { useEffect } from "react"
import Load from "../assets/giphy.gif"
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"
export const MovieList = ({apiPath,title}) => {
  
 const {data:movies,loading}=useFetch(apiPath)
// useEffect(()=>{
//   document.title=`${title}/cinimate`
// }) 
useTitle(`${title}`)
 return (
<main>
{loading && (
    <div className="flex justify-center items-center h-screen">
      <img src={Load} alt="loading movie data..." className="w-32 h-32" />
    </div>
  ) }
  <section className="max-w-7xl mx-auto py-7">
    <div className='flex justify-start flex-wrap other:justify-evenly'>

{movies.map((movie)=>(
<Card key={movie.id} movie={movie}/>
))}


    </div>
  </section>
</main>
  )
}
