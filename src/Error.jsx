import React from 'react'

function Error() {
  return (
    <div class="bg-gray-100 h-screen flex items-center justify-center">
        <div class="text-center">
        <h1 class="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p class="text-2xl text-gray-700 mb-4">Oops! Page not found.</p>
        <a href="/" class="text-blue-500 hover:underline">Go back to home</a>
    </div>
    </div>
  )
}

export default Error