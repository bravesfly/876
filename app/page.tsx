import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";
import './home.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FAQ from '@/components/faq'
import Carousel from '@/components/carousel'
import HowItWork from "@/components/how-it-work";
export const metadata: Metadata = {
  title: 'The best way to get auto parts | Spark Auto Part Assistant',
};
export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-wrapper"><section className="section_hero"><div className="padding-global"><div className="container-medium"><div className="hero_background"></div>
        <div className="hero_wrap"><div className="hero_content"><div className="hero_header"><div className="hero_title-wrap"><h1 style={{
          "transform": "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }} className="text-9xl">The best<strong className="text-color-green">auto parts </strong>in Jamaica</h1>
          <div style={{
            "transform": "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-base text-lineheight-2xl">Spark Auto Part Assistant provides a smarter way to source car parts in Jamaica.
            Submit your request online — we’ll find the best local options, confirm details with you, and arrange fast delivery or pickup.
            No more waiting in line or visiting multiple stores. Get the parts you need, without the hassle.</div>
        </div>
          <div style={{
            "transform": "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="hero_buttons-wrap">
            <div className="button-wrapper"><a href="/contact-us" className="button is-secondary w-inline-block"><div className="button-background is-white-bg" style={{
              "transform": "translate3d(0%, 0rem, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }}>

            </div>
              <div className="text-block">Get a Quote</div>
            </a>
            </div>
            <div className="button-wrapper"><a href="/services" className="button is-outline w-button">How It Works</a></div>
          </div>
        </div>
          <div className="hero_statistics">
            <div style={{
              "transform": "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="hero_value">
              <div className="text-6xl is-hero-value">1300<strong className="text-5xl text-color-green is-first">+</strong>
              </div>
              <div className="text-xs">Parts requests handled</div>
            </div>
            <div style={{
              "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
            }} className="vertical-line"></div>
            <div style={{
              "transform": "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="hero_value"><div className="text-6xl is-hero-value">95<strong className="text-5xl text-color-green is-second">%</strong></div>
              <div className="text-xs">Match accuracy</div>
            </div>
            <div style={{
              "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
            }} className="vertical-line"></div>
            <div style={{
              "transform": "translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="hero_value"><div className="text-6xl is-hero-value">48<strong className="text-5xl text-color-green is-second">H</strong></div>
              <div className="text-xs">Delivery speed</div>
            </div>
          </div>
        </div>
          <div style={{
            "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="hero_visual"><img className="img" src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/67328069adab5393875d682c_hero%20visual.webp" alt="" style={{
            "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "filter": "blur(0px)", "transformStyle": "preserve-3d"
          }} sizes="(max-width: 1174px) 100vw, 1174px" loading="lazy" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/67328069adab5393875d682c_hero%20visual-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/67328069adab5393875d682c_hero%20visual-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/67328069adab5393875d682c_hero%20visual-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/67328069adab5393875d682c_hero%20visual.webp 1174w" /></div>
        </div>
      </div>
      </div>
      </section><section className="section_solutions"><div className="padding-global padding-section-medium"><div className="container-medium"><div className="solutions_wrap"><div className="solutions_header"><h2 style={{
        "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
      }} className="text-6xl"> Professional Auto Parts Sourcing That Prioritizes Speed, Accuracy, and Convenience</h2><div style={{
        "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
      }} className="text-base text-lineheight-2xl">Transform your car repair process with our smart sourcing. From part matching to delivery, SAPA makes it faster and easier to get what you need — all without running store to store. Choose the service that best fits your situation — we’ll handle the rest.</div>
        <div style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }} className="button-wrapper"><a href="/contact-us" className="button w-inline-block"><div className="button-background" style={{
          "transform": "translate3d(0%, 0rem, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "willChange": "transform", "transformStyle": "preserve-3d"
        }}></div>
            <div className="text-block">Contact Us</div>
          </a></div>
      </div>
        <div className="solutions_content"><div id="w-node-c78c30ef-a5c5-9d0c-4b95-2d49cd7827e9-b22e8805" className="solutions_card"><div style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }} className="solutions_card-icon"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6733dfc2d15abf53896aa28f_services%20icon%201.svg" loading="lazy" alt="" className="img" /></div>
          <h3 style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-2xl">Standard Parts Request</h3><div style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-sm">Easily request common parts like filters, pads, and sensors — just tell us your vehicle and need.</div>
        </div>
          <div id="w-node-_8f834c83-4076-e93f-681f-b0373112f536-b22e8805" className="solutions_card"><div style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="solutions_card-icon"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6733e1956b567a88d99e1a75_services%20icon%202.svg" loading="lazy" alt="" className="img" /></div>
            <h3 style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="text-2xl">Assisted Matching</h3><div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="text-sm">Not sure what to ask for? Just describe your problem — we’ll help identify the right part.</div>
          </div>
          <div id="w-node-_43a9d281-84c3-ce6a-da5e-a29646b56b69-b22e8805" className="solutions_card"><div style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="solutions_card-icon"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6733e1c4564205f5938dfc70_services%20icon%203.svg" loading="lazy" alt="" className="img" /></div>
            <h3 style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="text-2xl">Priority Sourcing Service</h3><div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="text-sm">Want it faster or can’t find it? Upgrade to Priority Sourcing for quicker quotes and expanded searches.</div>
          </div>
        </div>
      </div>
      </div>
      </div>
        </section>
        <HowItWork></HowItWork><section className="section_categories is-home-page"><div className="padding-global padding-section-large"><div className="container-medium"><div className="categories_wrap"><div className="categories_header"><div className="categories_title-wrap"><h2 style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }} className="text-5xl">All-in-One Local Parts Sourcing</h2><div style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }} className="text-base text-lineheight-2xl">From request to delivery, we handle the full process — saving you time, effort, and mistakes.</div>
        </div>
          <div style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="button-wrapper"><a href="/services" className="button is-outline-blue w-button">See services</a></div>
        </div>
          <div className="w-dyn-list"><div role="list" className="w-dyn-items"><div role="listitem" className="w-dyn-item"><a style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} href="/services/home-cleaning" className="categories_card w-inline-block"><div className="categories_card-content"><div className="categories_card-header"><svg style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-medium"><g clipPath="url(#clip0_13299_9184)"><path d="M11.62 5.825L16 2.5L22 7.05V4H25.5V9.705L30.5 13.5V16.5H28V29.5H4V16.5H1.5V13.5L4.605 11.145" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M26.0216 14.9995L15.9991 7.39453L5.97656 14.9995" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 7C7.51625 6.43875 7.06125 5.98375 6.5 3.5C5.93875 5.98375 5.48375 6.43875 3 7C5.48375 7.56125 5.93875 8.01625 6.5 10.5C7.06125 8.01625 7.51625 7.56125 10 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 23.5498C12.8712 23.0686 12.4812 22.6786 12 20.5498C11.5188 22.6786 11.1288 23.0686 9 23.5498C11.1288 24.0311 11.5188 24.4211 12 26.5498C12.4812 24.4211 12.8712 24.0311 15 23.5498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.5 18.0498C20.3063 17.3286 19.7212 16.7436 19 13.5498C18.2788 16.7436 17.6937 17.3286 14.5 18.0498C17.6937 18.7711 18.2788 19.3561 19 22.5498C19.7212 19.3561 20.3063 18.7711 23.5 18.0498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_13299_9184"><rect width="32" height="32" fill="currentColor"></rect></clipPath></defs></svg><h3 style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-2xl">Fast Quotes for Common Parts</h3></div>
              <div style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
              }} className="text-sm">Need filters, brake pads, or sensors? Get quick matches based on your car's model and year.</div>
            </div>
            <div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="more-services_card-link"><div className="text-base text-weight-bold is-categories-card-link">Contact Us</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          </a></div>
          </div>
          </div>
          <div className="w-dyn-list"><div role="list" className="w-dyn-items"><div role="listitem" className="w-dyn-item"><a style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "color": "rgb(25, 22, 21)", "transformStyle": "preserve-3d", "opacity": 1, "backgroundColor": "rgb(255, 255, 255)"
          }} href="/services/business-cleaning" className="categories_card w-inline-block"><div className="categories_card-content"><div className="categories_card-header"><svg style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-medium"><g clipPath="url(#clip0_13299_9184)"><path d="M11.62 5.825L16 2.5L22 7.05V4H25.5V9.705L30.5 13.5V16.5H28V29.5H4V16.5H1.5V13.5L4.605 11.145" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M26.0216 14.9995L15.9991 7.39453L5.97656 14.9995" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 7C7.51625 6.43875 7.06125 5.98375 6.5 3.5C5.93875 5.98375 5.48375 6.43875 3 7C5.48375 7.56125 5.93875 8.01625 6.5 10.5C7.06125 8.01625 7.51625 7.56125 10 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 23.5498C12.8712 23.0686 12.4812 22.6786 12 20.5498C11.5188 22.6786 11.1288 23.0686 9 23.5498C11.1288 24.0311 11.5188 24.4211 12 26.5498C12.4812 24.4211 12.8712 24.0311 15 23.5498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.5 18.0498C20.3063 17.3286 19.7212 16.7436 19 13.5498C18.2788 16.7436 17.6937 17.3286 14.5 18.0498C17.6937 18.7711 18.2788 19.3561 19 22.5498C19.7212 19.3561 20.3063 18.7711 23.5 18.0498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_13299_9184"><rect width="32" height="32" fill="currentColor"></rect></clipPath></defs></svg><h3 style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-2xl">Not Sure Version? Let Us Match It.</h3></div>
              <div style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
              }} className="text-sm">You know what part you need — just not the exact version or fit. </div>
            </div>
            <div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="more-services_card-link"><div className="text-base text-weight-bold is-categories-card-link">Contact Us</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
              }}><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          </a></div>
          </div>
          </div>
          <div className="w-dyn-list"><div role="list" className="w-dyn-items"><div role="listitem" className="w-dyn-item"><a style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} href="/services/green-cleaning-solutions" className="categories_card w-inline-block"><div className="categories_card-content"><div className="categories_card-header"><svg style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-medium"><g clipPath="url(#clip0_13299_9184)"><path d="M11.62 5.825L16 2.5L22 7.05V4H25.5V9.705L30.5 13.5V16.5H28V29.5H4V16.5H1.5V13.5L4.605 11.145" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M26.0216 14.9995L15.9991 7.39453L5.97656 14.9995" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 7C7.51625 6.43875 7.06125 5.98375 6.5 3.5C5.93875 5.98375 5.48375 6.43875 3 7C5.48375 7.56125 5.93875 8.01625 6.5 10.5C7.06125 8.01625 7.51625 7.56125 10 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 23.5498C12.8712 23.0686 12.4812 22.6786 12 20.5498C11.5188 22.6786 11.1288 23.0686 9 23.5498C11.1288 24.0311 11.5188 24.4211 12 26.5498C12.4812 24.4211 12.8712 24.0311 15 23.5498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.5 18.0498C20.3063 17.3286 19.7212 16.7436 19 13.5498C18.2788 16.7436 17.6937 17.3286 14.5 18.0498C17.6937 18.7711 18.2788 19.3561 19 22.5498C19.7212 19.3561 20.3063 18.7711 23.5 18.0498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_13299_9184"><rect width="32" height="32" fill="currentColor"></rect></clipPath></defs></svg><h3 style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-2xl">Priority sourcing service</h3></div>
              <div style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
              }} className="text-sm">Need it fast or can’t find it locally? We’ll search wider, move quicker, and update you at every step</div>
            </div>
            <div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="more-services_card-link"><div className="text-base text-weight-bold is-categories-card-link">Contact Us</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          </a></div>
          </div>
          </div>
          <div className="w-dyn-list"><div role="list" className="collection-list w-dyn-items"><div role="listitem" className="collection-item w-dyn-item"><a style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} href="/services/tailored-services" className="categories_card w-inline-block"><div className="categories_card-content"><div className="categories_card-header"><svg style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-medium"><g clipPath="url(#clip0_13299_9184)"><path d="M11.62 5.825L16 2.5L22 7.05V4H25.5V9.705L30.5 13.5V16.5H28V29.5H4V16.5H1.5V13.5L4.605 11.145" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M26.0216 14.9995L15.9991 7.39453L5.97656 14.9995" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 7C7.51625 6.43875 7.06125 5.98375 6.5 3.5C5.93875 5.98375 5.48375 6.43875 3 7C5.48375 7.56125 5.93875 8.01625 6.5 10.5C7.06125 8.01625 7.51625 7.56125 10 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 23.5498C12.8712 23.0686 12.4812 22.6786 12 20.5498C11.5188 22.6786 11.1288 23.0686 9 23.5498C11.1288 24.0311 11.5188 24.4211 12 26.5498C12.4812 24.4211 12.8712 24.0311 15 23.5498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.5 18.0498C20.3063 17.3286 19.7212 16.7436 19 13.5498C18.2788 16.7436 17.6937 17.3286 14.5 18.0498C17.6937 18.7711 18.2788 19.3561 19 22.5498C19.7212 19.3561 20.3063 18.7711 23.5 18.0498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_13299_9184"><rect width="32" height="32" fill="currentColor"></rect></clipPath></defs></svg><h3 style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-2xl">Flexible sourcing plans</h3></div>
              <div style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
              }} className="text-sm">From standard requests to complex needs, we adapt our service to fit your situation — not the other way around.</div>
            </div>
            <div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="more-services_card-link"><div className="text-base text-weight-bold is-categories-card-link">Contact Us</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          </a></div>
          </div>
          </div>
          <div className="w-dyn-list"><div role="list" className="w-dyn-items"><div role="listitem" className="w-dyn-item"><a style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} href="/services/client-focused-service" className="categories_card w-inline-block"><div className="categories_card-content"><div className="categories_card-header"><svg style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-medium"><g clipPath="url(#clip0_13299_9184)"><path d="M11.62 5.825L16 2.5L22 7.05V4H25.5V9.705L30.5 13.5V16.5H28V29.5H4V16.5H1.5V13.5L4.605 11.145" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M26.0216 14.9995L15.9991 7.39453L5.97656 14.9995" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 7C7.51625 6.43875 7.06125 5.98375 6.5 3.5C5.93875 5.98375 5.48375 6.43875 3 7C5.48375 7.56125 5.93875 8.01625 6.5 10.5C7.06125 8.01625 7.51625 7.56125 10 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 23.5498C12.8712 23.0686 12.4812 22.6786 12 20.5498C11.5188 22.6786 11.1288 23.0686 9 23.5498C11.1288 24.0311 11.5188 24.4211 12 26.5498C12.4812 24.4211 12.8712 24.0311 15 23.5498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.5 18.0498C20.3063 17.3286 19.7212 16.7436 19 13.5498C18.2788 16.7436 17.6937 17.3286 14.5 18.0498C17.6937 18.7711 18.2788 19.3561 19 22.5498C19.7212 19.3561 20.3063 18.7711 23.5 18.0498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_13299_9184"><rect width="32" height="32" fill="currentColor"></rect></clipPath></defs></svg><h3 style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-2xl">Customer-first approach</h3></div>
              <div style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
              }} className="text-sm">We keep you in the loop at every step — from sourcing to confirmation. Real people, real updates, zero guesswork.</div>
            </div>
            <div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="more-services_card-link"><div className="text-base text-weight-bold is-categories-card-link">Contact Us</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          </a></div>
          </div>
          </div>
        </div>
        </div>
        </div>
        </section><section className="section_impact"><div className="padding-global padding-section-small"><div className="container-medium"><div className="impact_wrap"><div className="impact_visual"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e159a165bcdef44a0b50_impact%20image.webp" loading="lazy" style={{
          "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "filter": "blur(0px)", "transformStyle": "preserve-3d"
        }} sizes="100vw" alt="" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e159a165bcdef44a0b50_impact%20image-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e159a165bcdef44a0b50_impact%20image-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e159a165bcdef44a0b50_impact%20image.webp 1064w" className="img" /></div>
          <div className="impact_content-wrap"><div className="impact_header"><h2 style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-6xl">Transparent Pricing, Local Drop-Off, and Flexible Payment Options</h2><div style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} className="text-base text-lineheight-2xl">We offer direct delivery to select gated communities in Kingston and Portmore. For other locations across Jamaica, we coordinate courier shipping through trusted third-party providers.</div>
          </div>
            <div className="impact_content"><div className="impact_card"><div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="text-5xl is-impact-card-title">24 <strong className="text-4xl text-color-blue">H</strong></div>
              <div style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
              }} className="text-base text-lineheight-2xl">request answered <br />within 24 hours</div>
            </div>
              <div className="impact_card"><div style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
              }} className="text-5xl is-impact-card-title">50 <strong className="text-4xl text-color-blue">+</strong></div>
                <div style={{
                  "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
                }} className="text-base text-lineheight-2xl">Based in Jamaica,  <br />we know the market</div>
              </div>
              <div className="impact_card"><div style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
              }} className="text-5xl is-impact-card-title">10<strong className="text-4xl text-color-blue"> +</strong></div>
                <div style={{
                  "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
                }} className="text-base text-lineheight-2xl">verify exact parts  <br />before purchase</div>
              </div>
              <div className="impact_card"><div style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
              }} className="text-5xl is-impact-card-title">500 <strong className="text-4xl text-color-blue">+</strong></div>
                <div style={{
                  "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
                }} className="text-base text-lineheight-2xl">Home drop-off   <br />nationwide shipping</div>
              </div>
            </div>
            <div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="button-wrapper"><a href="/contact-us" className="button w-inline-block"><div className="button-background" style={{
              "transform": "translate3d(0%, 0rem, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "willChange": "transform", "transformStyle": "preserve-3d"
            }}></div>
                <div className="text-block">Contact Us</div>
              </a></div>
          </div>
        </div>
        </div>
        </div>
        </section><section className="section_cta"><div className="padding-box padding-section-small"><div className="container-large"><div className="cta_wrap"><div className="cta_content"><div className="cta_content-header"><h2 className="text-7xl" style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }}>Ready to make the switch to a faster, smarter, and stress-free way to buy auto parts?</h2><div className="cta_header-description" style={{
          "transform": "translate3d(0 px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }}><div className="text-base text-lineheight-2xl">Skip the long lines, guesswork, and endless shop visits. With Spark Auto Part Assistant, you simply tell us what you need — or upload your vehicle registration to help us confirm it for you.
          We’ll take it from there: sourcing the right parts, comparing  prices , and  arrang ing de livery  or pickup . It’s the easiest, most reliable way for Jamaican drivers to get parts — fast.</div>
          </div>
        </div>
          <div className="button-wrapper" style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }}><a href="/contact-us" className="button is-secondary w-inline-block"><div className="button-background is-white-bg" style={{
            "transform": "translate3d(0%, 0rem, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }}></div>
              <div className="text-block">Get My Quote Now →</div>
            </a></div>
        </div>
          <div className="cta_visual"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image.webp" loading="lazy" sizes="(max-width: 1352px) 100vw, 1352px" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image.webp 1352w" alt="" className="img" style={{
            "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "filter": "blur(0px)", "transformStyle": "preserve-3d"
          }} /></div>
        </div>
        </div>
        </div>
        </section><section className="section_testimonials"><div className="padding-global padding-section-medium"><div className="container-medium"><div className="testimonials_wrap"><div className="testimonials_header"><div className="badge" style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }}><div className="text-sm text-style-allcaps"> Testimonials</div>
        </div>
          <div className="testimonials_title" style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }}><h2 className="text-6xl">What Drivers Say About Spark</h2></div>
          <div className="text-base text-lineheight-2xl" style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }}>At Spark Auto Part Assistant, we help Jamaican drivers get the right parts quickly, confidently, and without hassle. But don’t just take our word for it — hear from real customers who’ve used our service and never looked back.</div>
        </div>
          <Carousel></Carousel>
        </div>
        </div>
        </div>
        </section><section className="section_blog-slider"><div className="padding-global padding-section-medium"><div className="container-medium"><div className="blog-slider_wrap"><div className="blog-slider_header"><h2 style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }} className="text-6xl text-style-pretty">Recent blog posts &amp; updates</h2><div className="blog-slider_description"><div style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }} className="text-base text-lineheight-2xl">Discover how our commitment to quality, reliability, and eco-friendly practices transforms spaces into cleaner, healthier environments.</div>
            <div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="button-wrapper"><a href="/blog" className="button w-inline-block"><div className="button-background" style={{
              "transform": "translate3d(0%, 0rem, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "willChange": "transform", "transformStyle": "preserve-3d"
            }}></div>
                <div className="text-block">View more</div>
              </a></div>
          </div>
        </div>
          <div data-delay="4000" data-animation="slide" className="slider w-slider" data-autoplay="false" data-easing="ease" style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" role="region" aria-label="carousel"><div className="blog-slider_mask w-slider-mask" id="w-slider-mask-0"><div className="slide w-slide" aria-label="1 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }}><div className="w-dyn-list"><div role="list" className="w-dyn-items"><div role="listitem" className="w-dyn-item"><a href="/blogs/innovative-cleaning-technologies-to-watch-in-2024" className="blogs_card w-inline-block"><div className="blogs-card-content"><div className="blogs-card-badge"><div className="badge-primary"><div className="text-xs text-color-blue">Business cleaning</div>
          </div>
          </div>
            <div className="blogs-card-text"><div className="blogs-card-title"><h3 className="text-2xl text-style-pretty">Innovative Cleaning Technologies to Watch in 2024</h3></div>
              <div className="text-base text-color-secondary text-lineheight-3xl">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
            </div>
            <div className="blog-slider_card-link"><div className="text-base text-weight-bold is-categories-card-link">Contact Us</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
              }}><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          </div>
            <div className="blogs-card-visual"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039.webp 2263w" className="img" style={{
              "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
            }} /></div>
          </a></div>
          </div>
          </div>
          </div>
              <div className="slide w-slide" aria-label="2 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/eco-friendly-cleaning-sustainable-practices-for-your-business" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Eco-Friendly Cleaning: Sustainable Practices for Your Business</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1).webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1).webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="3 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/how-clean-spaces-boost-employee-productivity" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">How Clean Spaces Boost Employee Productivity</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" style={{
                    "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
                  }} aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125.webp 2280w" className="img" style={{
                  "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
                }} aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="4 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/top-5-cleaning-challenges-in-commercial-spaces" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Top 5 Cleaning Challenges in Commercial Spaces</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126.webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="5 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/the-future-of-office-cleaning-trends-you-need-to-know" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true"> The Future of Office Cleaning: Trends You Need to Know</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127.webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="6 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/why-regular-deep-cleaning-is-essential-for-businesses" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Why Regular Deep Cleaning is Essential for Businesses</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039.webp 2275w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="7 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/the-role-of-cleaning-in-health-and-safety-standards" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">The Role of Cleaning in Health and Safety Standards</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129.webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="8 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/upcoming-changes-in-cleaning-industry-regulations" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Upcoming Changes in Cleaning Industry Regulations</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130.webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="9 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/client-spotlight-how-our-business-cleaning-service-transformed" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Client Spotlight: How Our Business Cleaning Service Transformed</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039.webp 2259w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore="">Slide 1 of 9.</div>
            </div>
            <div className="slider-shadow-left"></div>
            <div className="slider-shadow-right"></div>
            <div className="arrow w-slider-arrow-left" role="button" tabIndex={0} aria-controls="w-slider-mask-0" aria-label="previous slide"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-main"><path d="M10.5 19.5L11.5575 18.4425L5.8725 12.75H21V11.25H5.8725L11.5575 5.5575L10.5 4.5L3 12L10.5 19.5Z" fill="currentColor"></path></svg></div>
            <div className="arrow is-right w-slider-arrow-right" role="button" tabIndex={0} aria-controls="w-slider-mask-0" aria-label="next slide"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-main"><path d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z" fill="currentColor"></path></svg></div>
            <div className="hide w-slider-nav w-round"><div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 9" aria-pressed="true" role="button" tabIndex={0} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 4 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 5 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 6 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 7 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 8 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 9 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </section>
        <FAQ></FAQ>
      </main>
      <Footer />
    </div >
  );
}