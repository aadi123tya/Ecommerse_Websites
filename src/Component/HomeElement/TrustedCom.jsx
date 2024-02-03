import React from "react";

function TrustedCom() {
  return (
    <>
      <section className= "bg-gray-100 mb-4 py-12 border border-solid border-t-4 border-l-4 border-gray-300 p-4 rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Trusted by Companies
          </h2>

          <div className="flex justify-center items-center">
            {/* <!-- Logo/Badge 1 --> */}
            <div className="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" className="h-16" />
            </div>

            {/* <!-- Logo/Badge 2 --> */}
            <div className="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" className="h-16" />
            </div>

            {/* <!-- Logo/Badge 3 --> */}
            <div className="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" className="h-16" />
            </div>

            {/* <!-- Logo/Badge 4 --> */}
            <div className="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" className="h-16" />
            </div>


            {/* <!-- Logo/Badge 5 --> */}
            <div className="mx-4">
              <img src="/images/clogo.png" alt="Company Logo" className="h-16" />
            </div>
            {/* <!-- Add more logos as needed --> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default TrustedCom;
