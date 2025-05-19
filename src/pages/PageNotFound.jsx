import React from 'react'
import PageNot from '../assets/pagenotfound.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

export const PageNotFound = () => {
  
const navigate=useNavigate()
const handleBut=()=>
   navigate("/")

  return (
<main>
<section className=' bg-slate-300   flex flex-col justify-center px-2 dark:bg-darkbg'>
  <div className='flex flex-col items-center my-4'>
<p className='  text-7xl text-gray-700 font-bold my-10 dark:text-white'>404,OOPs!</p>
<div>


<img className='rounded' src={PageNot} alt="404 page not found" />
</div>
<div className='flex justify-center my-4'>
 <Button handleBut={handleBut} >BackToCinimate</Button>
 </div>
  </div>
  
</section>

</main>
  )
}
