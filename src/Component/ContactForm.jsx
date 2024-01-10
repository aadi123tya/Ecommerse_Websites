import React from "react";

function ContactForm() {
  return (
    <>
      <div class="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <form action="https://formspree.io/f/moqgqrvd" method="post">
          <div class="mb-4">
            <label for="name" class="block text-gray-600 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div class="mb-6">
            <label
              for="message"
              class="block text-gray-600 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          <div class="flex items-center">
            <button
              type="submit"
              class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
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
