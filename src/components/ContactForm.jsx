import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-6">
        <input
          type="email"
          className="border rouned-md border-gray-500 px-4 py-2 focus:outline-none focus:border-textActive col-span-2"
          placeholder="Email"
        />
        <input
          type="tel"
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Phone"
        />
        <textarea
          cols="10"
          rows="5"
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Write your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        value="Send Message"
        className="focus:outline-none mt-5 bg-secondary px-4 py-2 text-white font-bold w-full"
      ></button>
    </form>
  );
};

export default ContactForm;
