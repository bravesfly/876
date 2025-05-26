import Image from "next/image";
import { ContactForm } from "../components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header/Navigation */}
      <header className="bg-orange-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">876</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-orange-200">Home</a>
            <a href="#" className="hover:text-orange-200">Pricing</a>
            <a href="#" className="hover:text-orange-200">Pages</a>
            <a href="#" className="hover:text-orange-200">Blog</a>
            <a href="#" className="hover:text-orange-200">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">Cart [ ]</div>
            <a href="tel:18001236789" className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-400 hidden md:block">1 800 - 1236 789</a>
            <button className="md:hidden">☰</button>
          </div>
        </div>
      </header>

      {/* Hero Section with Form */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Full spectrum of<br />
              handyman solutions
            </h2>
            <div className="w-24 h-1 bg-orange-500"></div>
            <ContactForm />
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -z-10 w-80 h-80 bg-orange-200 rounded-full right-10"></div>
            <div className="relative">
              <Image 
                src="/heros.webp" 
                alt="Professional mechanic" 
                width={500} 
                height={500}
                className="object-contain"
                priority
              />
              {/* <div className="absolute left-0 bottom-20 transform -translate-x-1/4">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FFF" stroke="#FB923C" strokeWidth="2"/>
                  <path d="M16 12L10 16V8L16 12Z" fill="#FB923C"/>
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Auto Parts Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide high-quality auto parts and professional repair services to keep your vehicle running smoothly.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6L18 10M18 10L14 14M18 10H10.5C8.01472 10 6 12.0147 6 14.5C6 16.9853 8.01472 19 10.5 19H16" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Engine Parts</h3>
              <p className="text-gray-600">High-quality engine components for all vehicle makes and models.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Emergency parts delivery and installation services available around the clock.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">All our parts come with a warranty and satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">5000+</div>
              <div className="text-gray-600">Parts Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">876</h3>
              <p className="text-gray-400">Your trusted partner for all auto parts and repair services in Jamaica.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Engine Parts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Brake Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Electrical Components</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Body Parts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Main Street</p>
                <p>Kingston, Jamaica</p>
                <p className="mt-2">Phone: 1 800 - 1236 789</p>
                <p>Email: info@876.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} 876. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
