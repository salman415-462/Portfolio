import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            © 2024 Malik Muhammad Salman Zahid. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/salman" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://t.me/salman" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaTelegram className="text-xl" />
            </a>
            <a 
              href="https://twitter.com/salman" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
