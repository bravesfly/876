import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'The best way to get auto parts | Spark Auto Part Assistant',
};
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 - 类似CleanNest风格 */}
      <nav className="bg-blue-600 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Spark</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-white hover:text-blue-200 transition duration-300">
              Services
            </Link>
            <Link href="#how-it-works" className="text-white hover:text-blue-200 transition duration-300">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-white hover:text-blue-200 transition duration-300">
              Testimonials
            </Link>
            <Link href="#faq" className="text-white hover:text-blue-200 transition duration-300">
              FAQ
            </Link>
            <Link href="#contact" className="text-white hover:text-blue-200 transition duration-300">
              Contact
            </Link>
          </div>
          <div>
            <Link href="#contact" className="bg-[#c3e9a0] text-blue-600 px-6 py-2 rounded-full hover:bg-green-300 transition duration-300 font-medium">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero 区块 */}
      {/* Hero区块 - 类似CleanNest风格 */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">

              <span className="block">The best way to get </span>
              <span className="block text-[#c3e9a0]">auto parts</span>
              <span className="block">in Jamaica</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 animate-fadeIn delay-100">
              Spark Auto Part Assistant provides a smarter way to source car parts in Jamaica.
              Submit your request online — we’ll find the best local options, confirm details with you, and arrange fast delivery or pickup.
              No more waiting in line or visiting multiple stores. Get the parts you need, without the hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-200">
              <Link href="#contact" className="bg-[#c3e9a0] text-blue-600 px-8 py-3 rounded-full text-center hover:bg-green-300 transition duration-300 text-lg font-medium">
                Contact Us
              </Link>
              <Link href="#services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-center hover:bg-blue-500 transition duration-300 text-lg font-medium">
                Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fadeIn delay-300">
            <div className="relative w-full max-w-lg">
              <Image
                src='/hero-image.png'
                alt='Spark Auto Parts Professional'
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 数据指标区 - 类似CleanNest风格 */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 animate-fadeIn">
              <h3 className="text-5xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                <span>1300</span>
                <span className="text-2xl text-green-400 ml-1">+</span>
              </h3>
              <p className="text-gray-600 mt-2">Parts requests handled</p>
            </div>
            <div className="p-6 animate-fadeIn delay-100">
              <h3 className="text-5xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                <span>95</span>
                <span className="text-2xl text-green-400 ml-1">%</span>
              </h3>
              <p className="text-gray-600 mt-2">Match accuracy</p>
            </div>
            <div className="p-6 animate-fadeIn delay-200">
              <h3 className="text-5xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                <span>48</span>
                <span className="text-2xl text-green-400 ml-1">H</span>
              </h3>
              <p className="text-gray-600 mt-2">Delivery speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 服务介绍区块 */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Auto Parts Sourcing That Prioritizes Speed, Accuracy, and Convenience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your car repair process with our smart sourcing.
              From part matching to delivery, SAPA makes it faster and easier to get what you need — all without running store to store.
              Choose the service that best fits your situation — we'll handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">All-in-One Local Parts Sourcing</h3>
              <p className="text-gray-600">
                From request to delivery, we handle the full process — saving you time, effort, and mistakes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Quotes for Common Parts</h3>
              <p className="text-gray-600">
                Need filters, brake pads, or sensors? Get quick matches based on your car's model and year.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Not Sure Which Version? Let Us Match It.</h3>
              <p className="text-gray-600">
                You know what part you need — just not the exact version or fit. Upload your blue vehicle registration slip along with the part name. We'll use your official vehicle info to find the correct match — no confusion, no mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works 流程 */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Simple Process for Getting the Right Auto Parts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Spark Auto Part Assistant, we make it easy to get the parts you need — even if you're not sure what they're called.
              From request to delivery, we handle everything so you don't have to.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-1 bg-blue-200 z-0 md:mx-auto"></div>
              <div className="relative z-10 bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Submit your parts request in seconds</h3>
                <p className="text-gray-600">
                  Just tell us your vehicle model, year, and what you're looking for — whether it's a full part name or just a problem description.
                  We'll use this info to start sourcing the right options, fast.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-1 bg-blue-200 z-0 md:mx-auto"></div>
              <div className="relative z-10 bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">We Find, Confirm, and Quote the Right Parts</h3>
                <p className="text-gray-600">
                  Our team searches trusted local suppliers to find parts that match your vehicle.
                  We confirm every detail with you — no more guessing, no more describing things to the wrong people.
                  Forget long lines and running from shop to shop.
                  With SAPA, you save time, avoid mistakes, and get the best price.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-1 bg-blue-200 z-0 md:mx-auto"></div>
              <div className="relative z-10 bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Receive Your Parts — Delivered or Ready for Pickup</h3>
                <p className="text-gray-600">
                  Once your parts are secured, we arrange delivery to your door or a convenient pickup point.
                  If your mechanic is willing, we'll even speak with them directly to confirm that the part truly matches your repair.
                  Before any non-refundable order is placed, we do our best to verify everything and help you avoid costly mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务亮点卡片 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Spark Auto Part Assistant?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete solution for all your auto parts needs, with a focus on accuracy, convenience, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Priority sourcing service</h3>
              <p className="text-gray-600">
                Need it fast or can't find it locally? We'll search wider, move quicker, and update you at every step.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible sourcing plans</h3>
              <p className="text-gray-600">
                From standard requests to complex needs, we adapt our service to fit your situation — not the other way around.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer-first approach</h3>
              <p className="text-gray-600">
                We keep you in the loop at every step — from sourcing to confirmation. Real people, real updates, zero guesswork.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Transparent Pricing, Local Drop-Off, and Flexible Payment Options</h3>
            <p className="text-lg mb-6">
              We offer direct delivery to select gated communities in Kingston and Portmore.
              For other locations across Jamaica, we coordinate courier shipping through trusted third-party providers.
              All fees are clearly quoted upfront — no hidden charges.
            </p>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">We accept:</h4>
              <ul className="flex flex-wrap justify-center gap-4">
                <li className="bg-white text-blue-600 px-4 py-2 rounded-full">NCB bank transfers</li>
                <li className="bg-white text-blue-600 px-4 py-2 rounded-full">Credit and debit cards via Stripe</li>
              </ul>
            </div>
            <p className="text-lg">
              Every part request receives a response within 24 hours, with full transparency and support throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* 客户评价区 */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Drivers Say About Spark</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Spark Auto Part Assistant, we help Jamaican drivers get the right parts quickly, confidently, and without hassle. But don't just take our word for it — hear from real customers who've used our service and never looked back.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-bold">John M.</h4>
                  <div className="flex text-yellow-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"They didn't just quote. They explained the options and let me decide. It's not just a website. Real team behind it. They messaged me back quickly."</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">SD</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah D.</h4>
                  <div className="flex text-yellow-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"I needed brake pads urgently. They had it delivered the same day in Kingston. They even warned me which parts couldn't be returned. I respect that."</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">RT</span>
                </div>
                <div>
                  <h4 className="font-bold">Robert T.</h4>
                  <div className="flex text-yellow-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"Used Spark to find parts for my dad's Hiace. All came sorted. Very professional, no hype. They just help you get what you need."</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-medium inline-block">
              Get My Quote Now →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ 区块 */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently asked questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about getting auto parts through Spark — from requests to delivery and payment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What kind of auto parts can you help me find?</h3>
              <p className="text-gray-600">
                We can help you source almost all common auto parts, including mechanical and body parts: filters, sensors, brake pads, engine components, lights, etc., for Japanese, American, and European vehicles. Just provide your vehicle information and the part name, and we'll help you find it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can you help confirm if I'm requesting the right part?</h3>
              <p className="text-gray-600">
                Yes. If you're unsure about the part model, you can upload your vehicle registration certificate or provide the chassis number, and we'll help you verify before ordering. For some complex parts, we may suggest you provide notes from your mechanic or photos of the actual part.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How do I request a quote for parts?</h3>
              <p className="text-gray-600">
                You can fill out our online form or contact us directly via WhatsApp. Provide your vehicle information and the parts you need, and we'll send you a detailed quote as soon as possible, including product description, price, availability, and delivery options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How do I receive my parts after ordering?</h3>
              <p className="text-gray-600">
                You can choose from the following options: door-to-door delivery (limited to certain gated communities in Kingston and Portmore), courier shipping across Jamaica (arranged by us), or pickup at a designated location. We'll confirm the delivery method with you before shipping.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What if the part is wrong or doesn't fit?</h3>
              <p className="text-gray-600">
                Most parts are returnable and exchangeable (unless specifically marked) if purchased with proper information. If the error is due to incorrect information provided by you, we'll still try to help resolve the issue, but the return policy will depend on the supplier. We'll verify as much as possible before ordering to avoid errors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept secure online payments via debit/credit card (processed by Stripe), as well as direct bank transfers to our NCB business account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系表单 */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">💼 Want to join us or work together?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              If you're a local supplier, part finder, or want to join our sourcing team, leave your contact and we'll get in touch.
              We're always looking for reliable people and partners across Jamaica.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Spark Auto Part Assistant</h3>
              <p className="text-gray-400">
                The smarter way to source car parts in Jamaica. Save time, avoid mistakes, and get the right parts, fast.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">Kingston, Jamaica</p>
              <p className="text-gray-400 mb-2">Email: info@sparkparts.com</p>
              <p className="text-gray-400">WhatsApp: +1 (876) 123-4567</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-gray-400 mb-2">Monday - Friday: 8am - 6pm</p>
              <p className="text-gray-400">Saturday: 9am - 2pm</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Spark Auto Part Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
