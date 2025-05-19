
import { useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle";
// import { useEffect } from "react";


export const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q")
  const {data:movies}=useFetch(apiPath,queryTerm)
  //eslint-disable-next-Line
  const pageTitle=useTitle(`Search results for ${queryTerm}`)//pagetitle ust for readability
  // useEffect(()=>{
  //   document.title=`Search result for ${queryTerm}/cinimate`
  // })
  return (
    
    <div>

<main>
  <section>
    <p className="text-3xl text-gray-700 dark:text-white">
{movies.length===0?`No results found for ${queryTerm}`:`results for ${queryTerm}`}
    </p>
  </section>
  <section className="max-w-7xl mx-auto py-7">
    <div className='flex justify-start flex-wrap'>

{movies.map((movie)=>(
<Card key={movie.id} movie={movie}/>
))}


    </div>
  </section>
</main>

    </div>
  )
}
