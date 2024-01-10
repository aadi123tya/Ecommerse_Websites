import React from 'react'
import useUserContext from '../context/context'

function Error() {
  const {item,setname} = useUserContext()
  console.log(item)
  return (
   <>
    <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="max-w-md bg-white p-8 rounded shadow-md">
        <h1 class="text-3xl font-semibold mb-4">Oops! Something went wrong.</h1>
        <p class="text-gray-600 mb-4">We're sorry, but it seems like there was an error processing your request. Please try again later.</p>
        <a href="/" class="text-blue-500 hover:underline">Go back to the home page</a>
    </div>
    </div>
   </>
  )
}

export default Error