import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Address Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact the Store</h2>
          <p>123 Headphone Avenue</p>
          <p>Lagos, Nigeria</p>
          <p>Phone: +234 8134413741</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://instagram.com/yemith.dev" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500 transition" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl hover:text-blue-500 transition" />
            </a>
            <a href="https://x.com/yemith_DEV" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-sky-400 transition" />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
          <p className="mb-4">Get updates on new arrivals and special offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-[#a141a4] hover:bg-[#d583d8] px-4 py-2 rounded-md cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className=" mt-10 text-center text-sm text-black">
        &copy; {new Date().getFullYear()} Big Bangg store. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
