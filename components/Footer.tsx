import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="w-full md:w-1/3 space-y-4 flex ">
            <Image
              src="/logo.svg"
              alt="logo"
              className="object-contain"
              width={200}
              height={200}
              priority
            />
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 md:flex md:flex-row justify-between gap-6 md:gap-10 px-2">
            <div>
              <h3 className="font-normal mb-4 text-white">Company</h3>
              <div className="text-gray-300 text-sm space-y-1 hidden md:block">
                <p>Tallinn, Estonia 2 Seebi</p>
                <p>Tondi, 11316</p>
              </div>
            </div>

            <div>
              <h3 className="font-normal mb-4 text-white">Products</h3>
              <div className="text-gray-300 text-sm hidden md:block">
                <p>info@almarcorp.com</p>
              </div>
            </div>

            <div>
              <h3 className="font-normal mb-4 text-white">News</h3>
            </div>

            <div>
              <h3 className="font-normal mb-4 text-white">Contact</h3>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 md:hidden gap-10 px-2 mt-6">
            <div className="text-gray-300 text-sm space-y-1">
              <p>Tallinn, Estonia 2 Seebi</p>
              <p>Tondi, 11316</p>
            </div>
            <div className="text-gray-300 text-sm">
              <p>info@almarcorp.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6 text-sm text-gray-400">
          <p className="text-xs">© 2020 Almar Corp</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.876-.875-1.366-2.026-1.366-3.323s.49-2.448 1.366-3.323c.875-.876 2.026-1.366 3.323-1.366s2.448.49 3.323 1.366c.876.875 1.366 2.026 1.366 3.323s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
