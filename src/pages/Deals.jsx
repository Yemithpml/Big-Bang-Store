import React from "react";

function Deals() {
  return (
    <section id="deals">
    <div className="p-6 pt-20">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form className="mt-4 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
    </section>
  );
}

export default Deals;
