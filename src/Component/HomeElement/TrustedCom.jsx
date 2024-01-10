import React from "react";

function TrustedCom() {
  return (
    <>
      <section class= "bg-gray-100 mb-4 py-12 border border-solid border-t-4 border-l-4 border-gray-300 p-4 rounded-lg">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Trusted by Companies
          </h2>

          <div class="flex justify-center items-center">
            {/* <!-- Logo/Badge 1 --> */}
            <div class="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" class="h-16" />
            </div>

            {/* <!-- Logo/Badge 2 --> */}
            <div class="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" class="h-16" />
            </div>

            {/* <!-- Logo/Badge 3 --> */}
            <div class="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" class="h-16" />
            </div>

            {/* <!-- Logo/Badge 4 --> */}
            <div class="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" class="h-16" />
            </div>


            {/* <!-- Logo/Badge 5 --> */}
            <div class="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" class="h-16" />
            </div>
            {/* <!-- Add more logos as needed --> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default TrustedCom;
