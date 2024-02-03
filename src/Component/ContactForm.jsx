import React from "react";

function ContactForm() {
  return (
    <>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <form action="https://formspree.io/f/moqgqrvd" method="post">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-600 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
