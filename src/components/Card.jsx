import {Link} from "react-router-dom"
import Backup from "../assets/images/backup.jpeg"
export const Card = ({movie}) => {
  const path=movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:Backup
  
  return (
    <div>
      
   

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
       <Link to={`/movie/${movie.id}`}>
        <img className="rounded-t-lg" src={path} alt="" />
    </Link>
    <div className="p-5">
        <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
        
    </div>
</div>


    </div>
  )
}
