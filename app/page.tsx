'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ContactForm } from '../components/contact-form';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Image from 'next/image';

// 动画变体
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  // 创建引用以用于滚动动画
  const targetRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  // 滚动动画
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  
  return (
    <>
    <Header />
    <main className="overflow-x-hidden">
      {/* 英雄区域 */}
            {/* 英雄区域 */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h2 
                variants={fadeInUp} 
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                Need Auto Parts? Contact Us Now
              </motion.h2>
              <motion.p 
                variants={fadeInUp} 
                className="text-lg text-gray-600 max-w-lg"
              >
                Fill out the form below to request the parts you need. Our team will get back to you with availability and pricing information.
              </motion.p>
              
              {/* 联系表单 */}
              <motion.div variants={fadeInUp}>
                <ContactForm />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[700px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="/heros.webp" 
                  alt="Auto parts and mechanic service" 
                  fill 
                  style={{objectFit: 'cover'}} 
                  priority 
                  className="rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-2">
                    <p className="text-2xl md:text-3xl font-bold text-orange-500">5K+</p>
                    <p className="text-sm text-gray-600">Parts Available</p>
                  </div>
                  <div className="p-2">
                    <p className="text-2xl md:text-3xl font-bold text-orange-500">99%</p>
                    <p className="text-sm text-gray-600">Client Satisfaction</p>
                  </div>
                  <div className="p-2">
                    <p className="text-2xl md:text-3xl font-bold text-orange-500">24h</p>
                    <p className="text-sm text-gray-600">Fast Delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 服务区域 */}
      <section id="services" className="py-20 bg-gray-50" ref={targetRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Premium Auto Services
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We provide high-quality parts and expert service for all vehicle makes and models
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
              className="bg-white p-8 rounded-xl shadow-md hover-lift"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Image src="/mechanic.svg" alt="Engine parts" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Engine Parts</h3>
              <p className="text-gray-600">High-quality engine components to keep your vehicle running at peak performance.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
              className="bg-white p-8 rounded-xl shadow-md hover-lift"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Image src="/window.svg" alt="Body parts" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Body Parts</h3>
              <p className="text-gray-600">Exterior and interior components that ensure your vehicle looks and functions perfectly.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
              className="bg-white p-8 rounded-xl shadow-md hover-lift"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Image src="/globe.svg" alt="Global sourcing" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Sourcing</h3>
              <p className="text-gray-600">We source parts from around the world to ensure you get exactly what your vehicle needs.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 流程区域 */}
      <section className="py-20 bg-white" ref={processRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Simple process to get the parts you need quickly and efficiently
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* 连接线 - 仅在中等屏幕以上显示 */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-white p-8 rounded-xl shadow-md relative z-10">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Request Your Parts</h3>
                <p className="text-gray-600 text-center">Fill out our simple form with your vehicle details and the parts you need. We'll handle the rest.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-md relative z-10">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">We Source Your Parts</h3>
                <p className="text-gray-600 text-center">Our team of experts sources high-quality parts that match your exact specifications and budget.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-md relative z-10">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Fast Delivery</h3>
                <p className="text-gray-600 text-center">Receive your parts quickly with our efficient delivery service, or pick them up at our location.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 统计数据 */}
      <section className="py-20 bg-orange-500 text-white" ref={statsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="space-y-2"
            >
              <p className="text-4xl md:text-5xl font-bold">$5M+</p>
              <p className="text-lg">Parts inventory value</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-4xl md:text-5xl font-bold">50+</p>
              <p className="text-lg">Expert staff members</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-4xl md:text-5xl font-bold">10+</p>
              <p className="text-lg">Years of service</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-4xl md:text-5xl font-bold">500+</p>
              <p className="text-lg">Satisfied customers</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 客户评价 */}
      <section className="py-20 bg-gray-50" ref={testimonialsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Hear from our satisfied customers about their experience with our auto parts and service
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <h3 className="font-semibold mb-2">Best auto parts supplier</h3>
              <p className="text-gray-600 mb-4">The team at Profixer is incredibly helpful. They found the exact parts I needed for my Toyota and delivered them quickly. My car is running perfectly now!</p>
              <div className="flex items-center">
                <div className="mr-3 font-medium">John Davis</div>
                <div className="text-gray-500 text-sm">@johndavis</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <h3 className="font-semibold mb-2">Quality parts, great service</h3>
              <p className="text-gray-600 mb-4">I've tried several auto parts suppliers before, but Profixer is by far the best. They are thorough, reliable, and always provide genuine parts. Highly recommend!</p>
              <div className="flex items-center">
                <div className="mr-3 font-medium">Emily Rodriguez</div>
                <div className="text-gray-500 text-sm">@emilyro</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <h3 className="font-semibold mb-2">Saved my business</h3>
              <p className="text-gray-600 mb-4">Profixer has transformed my taxi business! Their team is professional and pays attention to every detail. I get all my fleet parts from them now. Thank you, Profixer!</p>
              <div className="flex items-center">
                <div className="mr-3 font-medium">Michael Thompson</div>
                <div className="text-gray-500 text-sm">@michaelt</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ部分 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Find answers to common questions about our auto parts and services
            </motion.p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-3">What types of auto parts do you offer?</h3>
              <p className="text-gray-600">We offer a comprehensive range of auto parts, including engine components, body parts, electrical systems, suspension parts, brakes, transmission parts, and more for all major vehicle makes and models.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-3">Do you offer genuine OEM parts?</h3>
              <p className="text-gray-600">Yes, we offer both genuine OEM (Original Equipment Manufacturer) parts as well as high-quality aftermarket alternatives to suit different budgets and requirements.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-3">How do I know which parts fit my vehicle?</h3>
              <p className="text-gray-600">Simply provide us with your vehicle's make, model, year, and VIN number, and our experts will ensure you get the exact parts that fit your vehicle perfectly.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-3">What if I'm not satisfied with my parts?</h3>
              <p className="text-gray-600">Your satisfaction is our priority. If you're not happy with the parts you received, please let us know within 7 days, and we'll work with you to find a solution, which may include replacement or refund.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 联系表单 */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h2 
                variants={fadeInUp} 
                className="text-3xl md:text-4xl font-bold"
              >
                Need Auto Parts? We've Got You Covered
              </motion.h2>
              <motion.p 
                variants={fadeInUp} 
                className="text-xl text-gray-600"
              >
                Fill out the form with your vehicle details and the parts you need. Our team will get back to you quickly with availability and pricing.
              </motion.p>
              <motion.div 
                variants={fadeInUp} 
                className="space-y-4"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#f97316" strokeWidth="2"/>
                      <path d="M12 18V22M12 22H8M12 22H16" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600">123 Auto Parts Street, Kingston, Jamaica</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#f97316" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Contact Us</h3>
                    <p className="text-gray-600">+1 (876) 123-4567 | info@profixer.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600">Monday-Friday: 8am-6pm | Saturday: 9am-4pm</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 页脚 */}
      <Footer />
     </main></>
    )}