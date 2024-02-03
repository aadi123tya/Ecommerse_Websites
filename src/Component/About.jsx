import React from 'react'
import { setpathName } from '../feature/Slices'
import { useDispatch } from 'react-redux'

function About() {
  const url =window.location.pathname.toString()
  const dispatch = useDispatch()
  dispatch(setpathName(url))
  return (
    <div>

{/* <!-- Navigation --> */}
<nav className="bg-gray-800 text-white p-4">
  <div className="container mx-auto">
    {/* <!-- Your navigation content goes here --> */}
  </div>
</nav>

{/* <!-- About Us Content --> */}
<div className="container mx-auto my-8 p-4">

  {/* <!-- Company Introduction --> */}
  <section className=" mb-8 ">
    <h1 className="text-3xl font-semibold">About Our Company</h1>
    <p className="text-gray-600 mt-2">
      Welcome to [Your Company Name], where we [briefly describe what your company does or sells]. 
      Our mission is to [state your mission or goal] and provide high-quality products/services to our valued customers.
    </p>
  </section>

  {/* <!-- Our Story --> */}
  <section className="mb-8">
    <h2 className="text-2xl font-semibold">Our Story</h2>
    <p className="text-gray-600 mt-2">
      [Tell the story of how your company started, any challenges you've overcome, and key milestones. 
      Include information about your founders and the inspiration behind your business.]
    </p>
  </section>

  {/* <!-- Values and Commitment --> */}
  <section className="mb-8">
    <h2 className="text-2xl font-semibold">Our Values and Commitment</h2>
    <p className="text-gray-600 mt-2">
      At [Your Company Name], we are committed to [outline your core values and commitments, 
      such as customer satisfaction, quality, sustainability, etc.].
    </p>
  </section>

  {/* <!-- Meet the Team --> */}
  <section className="mb-8">
    <h2 className="text-2xl font-semibold">Meet the Team</h2>
    <p className="text-gray-600 mt-2">
      [Introduce key members of your team. Include their names, roles, and a brief description of their contributions. 
      You can also include photos for a personal touch.]
    </p>
  </section>

</div>

{/* <!-- Footer --> */}
<footer className="bg-gray-800 text-white p-4 mt-8">
  <div className="container mx-auto">
    {/* <!-- Your footer content goes here --> */}
  </div>
</footer>


    </div>
  )
}

export default About