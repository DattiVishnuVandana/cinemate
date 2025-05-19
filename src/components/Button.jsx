import React from 'react'

export const Button = ({children,handleBut}) => {
  return (
    <div>
         <button onClick={handleBut} className='w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium dark:text-white'>{children}</button>

    </div>
  )
}
