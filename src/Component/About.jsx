import React from 'react'

function About() {
  return (
    <div>
      <body class="bg-gray-100 font-sans">

{/* <!-- Navigation --> */}
<nav class="bg-gray-800 text-white p-4">
  <div class="container mx-auto">
    {/* <!-- Your navigation content goes here --> */}
  </div>
</nav>

{/* <!-- About Us Content --> */}
<div class="container mx-auto my-8 p-4">

  {/* <!-- Company Introduction --> */}
  <section class="mb-8">
    <h1 class="text-3xl font-semibold">About Our Company</h1>
    <p class="text-gray-600 mt-2">
      Welcome to [Your Company Name], where we [briefly describe what your company does or sells]. 
      Our mission is to [state your mission or goal] and provide high-quality products/services to our valued customers.
    </p>
  </section>

  {/* <!-- Our Story --> */}
  <section class="mb-8">
    <h2 class="text-2xl font-semibold">Our Story</h2>
    <p class="text-gray-600 mt-2">
      [Tell the story of how your company started, any challenges you've overcome, and key milestones. 
      Include information about your founders and the inspiration behind your business.]
    </p>
  </section>

  {/* <!-- Values and Commitment --> */}
  <section class="mb-8">
    <h2 class="text-2xl font-semibold">Our Values and Commitment</h2>
    <p class="text-gray-600 mt-2">
      At [Your Company Name], we are committed to [outline your core values and commitments, 
      such as customer satisfaction, quality, sustainability, etc.].
    </p>
  </section>

  {/* <!-- Meet the Team --> */}
  <section class="mb-8">
    <h2 class="text-2xl font-semibold">Meet the Team</h2>
    <p class="text-gray-600 mt-2">
      [Introduce key members of your team. Include their names, roles, and a brief description of their contributions. 
      You can also include photos for a personal touch.]
    </p>
  </section>

</div>

{/* <!-- Footer --> */}
<footer class="bg-gray-800 text-white p-4 mt-8">
  <div class="container mx-auto">
    {/* <!-- Your footer content goes here --> */}
  </div>
</footer>

</body>
    </div>
  )
}

export default About