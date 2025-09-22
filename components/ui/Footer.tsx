import { Youtube, Instagram } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-br from-emerald-500 to-emerald-700 px-4 py-5 w-full md:px-8">
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 Dr. Kaushik Saha All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/prof_kaushik_saha_pulmodoc"
              target="_blank"
              className="w-10 h-10 border rounded-full flex items-center justify-center bg-white"
            >
              <Instagram className="w-6 h-6 text-blue-700" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100066604370586"
              target="_blank"
              className="w-10 h-10 border rounded-full flex items-center justify-center bg-white"
            >
              <svg
                className="svg-icon w-6 h-6 text-blue-700"
                viewBox="0 0 20 20"
              >
                <path
                  fill="none"
                  d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@drksahapulmo"
              target="_blank"
              className="w-10 h-10 border rounded-full flex items-center justify-center bg-white"
            >
              <Youtube className="w-6 h-6 text-blue-700" />
            </a>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};
