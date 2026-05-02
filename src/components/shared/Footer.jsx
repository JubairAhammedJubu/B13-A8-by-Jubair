import faceBook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import twitter from "@/assets/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#011239] text-gray-300">
      <div className="container mx-auto pt-10 md:pt-30 pb-7.5 px-4">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
          <div className="col-span-2">
            <h2 className="text-white text-3xl font-bold mb-4">Bookify</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              A smart digital library platform where you can explore, borrow,
              and manage books easily. Learn faster, read smarter.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Browse Books</li>
              <li className="hover:text-white cursor-pointer">Categories</li>
              <li className="hover:text-white cursor-pointer">New Arrivals</li>
              <li className="hover:text-white cursor-pointer">Top Rated</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Terms</li>
              <li className="hover:text-white cursor-pointer">Privacy</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-white font-medium mb-4">
              Social Links
            </h3>

            <div className="flex space-x-4">
              {/* Instagram */}
              <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <Image
                  src={instagram}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>

              {/* Facebook */}
              <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <Image
                  src={faceBook}
                  alt="Facebook"
                  width={12}
                  height={12}
                  className="object-contain"
                />
              </div>

              {/* Twitter */}
              <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <Image
                  src={twitter}
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2026 Bookify. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
